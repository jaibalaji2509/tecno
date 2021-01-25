import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'
import getInitialState from './initialState'

export default () => {
  // Note(samo): We need a dummy logger first so we can provide it in the thunk before the store exists
  const logger = {
    log: () => null,
  }
  const loggerMiddleware = createLogger({
    collapsed: true,
  })

  const middlewares = [
    thunk.withExtraArgument({logger}),
  ]
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(
      loggerMiddleware,
    )
  }

  const store = createStore(
    rootReducer,
    getInitialState(),
    applyMiddleware(...middlewares)
  )

  if (process.env.NODE_ENV === 'development') {
    logger.log = (message, payload) => store.dispatch({
      type: message,
      payload,
    })
  }

  return store
}
