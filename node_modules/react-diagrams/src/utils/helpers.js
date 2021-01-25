import lodash from 'lodash'
import assert from 'assert'

const _hasOwnProp = (obj, key) => {
  assert(typeof key === 'string' || typeof key === 'number', 'bad key type')
  assert(key !== '', 'empty key') // empty key is a terrible idea in general

  // Fun fact: "ab".hasOwnProperty(1) -> true
  if (typeof obj !== 'object') return false
  // Fun fact: typeof null === 'object'
  if (!obj) return false
  // Ok, now we are reasonably sure this is a valid object
  // Func fact: ({hasOwnProperty:()=>true}).hasOwnProperty("blah") -> true
  return Object.prototype.hasOwnProperty.call(obj, `${key}`)
}

/*
 * Apply function composition.
 * compose(f,g,h)(x) is equivalent to f(g(h(x)))
 */
export const compose = (f, ...fs) =>
  fs.length > 0 ? (x) => f(compose(...fs)(x)) : f

/*
 * Forward reducer transform to a particular state path.
 * If the last path element does not exist, reducer will get undefined
 * so that you can use reduce(state=initialState(), payload) => ...
 */
export const forwardReducerTo = (reducer, path) => (
  (state, payload) => {
    // Unfortunately, we cannot pass {last:undefined} to getIn
    const dummy = {}
    const resolvedPath = typeof path === 'function'
      ? path(state)
      : path
    const oldValue = getInState(state, resolvedPath, {last: dummy})
    const newValue = reducer(oldValue !== dummy ? oldValue : undefined, payload)
    return setIn(state, resolvedPath, newValue)
  }
)

/*
 * Lookups value on a specific path in a given state. If the lookup fails, the error is thrown
 * unless default value is specified. Last argument is a map of default values:
 * - last is used when access fails at last step
 * - any is used when access fails at any step
 */
export const getIn = (state, path, {last, any} = {}) => {
  checkValidPath(path)
  let value = state // 'any' terminates further flowtype inference, allowing value manipulation below
  for (let i = 0; i < path.length; i++) {
    if (_hasOwnProp(value, path[i])) {
      value = value[path[i]]
    } else {
      if (i === path.length - 1 && last !== undefined) {
        return last
      } else if (any !== undefined) {
        return any
      } else {
        throwError('getIn', state, path.slice(0, i + 1), value)
      }
    }
  }
  return value
}

/*
 * Checks whether path exists in a given state.
 */
export const hasIn = (state, path) => {
  const dummy = {}
  return getIn(state, path, {any: dummy}) !== dummy
}

/*
 * Typed getIn functions, to allow static checking when passing reducers
 */

export function getInState(state, path, {last, any}) {
  return getIn(state, path, {last, any})
}

/*
 * Updates the specific `path` in a `state` by a given function `fn`. This function accepts a
 * previous value (looked up at the `path`) as its argument.
 */

export function updateIn(state, path, fn, force = false) {
  checkValidPath(path, 0)
  if (path.length === 0) {
    return fn(state)
  }
  return recursiveUpdate('updateIn', state, state, path, 0, fn, force)
}

/*
 * Sets a specific `path` in a `state` to a given value, immutable style. If force = true, creates the
 * nonexistent path with empty objects.
 *
 * path: array of string keys
 * returns: new state
 */
export function setIn(state, path, val, force = false) {
  checkValidPath(path, 0)
  if (path.length === 0) {
    return val
  }
  return recursiveUpdate('setIn', state, state, path, 0, () => val, force)
}

// flow typecheck ends here (or gets lazy in most cases)
// extend if you need it in the rest of the functions

/*
 * Modifies dispatch function to work with specific path
 *
 * dispatch: original dispatch function
 * path: array of string keys
 */
export function dispatchIn(dispatch, path) {
  return (msg, fn, args) => {
    return dispatch(
      msg,
      (state, ...args) => {
        let _state = getIn(state, path, {any: ({})})
        let newState = fn(_state, ...args)
        return setIn(state, path, newState, true)
      },
      args
    )
  }
}

/*
 * Sets specific `path` of connected component state using uiDispatch.
 *
 * component: component decorated by connect
 * path: array of string keys
 * val: new value for the `path`
 * msg: dispatch message
 * args: dispatch arguments
 */
export function setInLocal(component, msg, path, val) {
  dispatchIn(component.props.uiDispatch, path)(msg, (state, _val) => _val, [val])
}

function throwError(taskName, state, pathSegment, value) {
  /* eslint-disable no-console */
  console.error(`${(taskName: any)} failed - can not find
    ${pathSegment[pathSegment.length - 1]} in ${JSON.stringify(value)}`)
  console.error('State: ', state)
  console.error('Path (until failure): ', pathSegment)
  /* eslint-enable no-console */
  throw new Error(`Can not find ${pathSegment[pathSegment.length - 1]} in ${value}`)
}


// taskName and whole state and path for debugging purposes
function recursiveUpdate(taskName, state, resolvedState, path, index, fn, force = false) {
  const key = path[index]
  let shallowCopy = cloneObject(resolvedState)
  if (!shallowCopy && force) {
    shallowCopy = {}
  }
  if (path.length - 1 === index) {
    // Note(ppershing): we cannot simply use shallowCopy[key] here.
    // Counterexample: "ab"[0], etc. (see _hasOwnProp)
    const old = _hasOwnProp(shallowCopy, key) ? shallowCopy[key] : undefined
    shallowCopy[key] = fn(old)
  } else {
    if (!_hasOwnProp(shallowCopy, key)) {
      if (force) {
        shallowCopy[key] = {}
      } else {
        throwError(taskName, state, path.slice(0, index + 1), shallowCopy)
      }
    }
    shallowCopy[key] = recursiveUpdate(taskName, state,
      shallowCopy[key], path, index + 1, fn, force)
  }
  return shallowCopy
}

function checkValidPath(path, minLength = 0) {
  if (!(path instanceof Array) || (path.length) < minLength) {
    throw new Error(`Expected path to be non-empty array, got: ${(path)}`)
  }
  // path may consist only of numbers and strings
  for (let e of path) {
    if (!((typeof e === 'string') || (typeof e === 'number'))) {
      throw new TypeError(`Path contains element that is not a number or a string.
        Path: ${(path)} Element: ${e}`)
    }
  }
}

/*
 * Filters attributes of an object, based on a provided filter, into a new object.
 * Example:
 *   obj = {a: 10, b: {c: 20, d: 30}, e: {f: 40, g: 50}}
 *   objfilter = {a: false, b: {c: true}, e: true}
 *   returns a new object {b: {c: 20}, e: {f: 40, g: 50}}
 * Note: In case of filtering whole objects, only a reference is copied. So in
 *   previous example, new object's e === old object's e. This will not be the
 *   case, if we filter it like this: e: {f: true, g: true}.
 *
 * obj: an object to be filtered
 * objfilter: an object describing which attributes to keep and which to lose
 * returns: a new object
 */
export const filterObject = (obj: Object, objFilter: Object): Object => (
  Object.keys(obj).reduce((accum, attr) => ((
    typeof objFilter[attr] === 'object'
      ? (accum[attr] = filterObject(obj[attr], objFilter[attr]))
      : (objFilter[attr] && (accum[attr] = obj[attr]))
    , accum
  )), {})
)

function cloneObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  if (lodash.isArray(obj)) return [...obj]
  return {...obj}
}
