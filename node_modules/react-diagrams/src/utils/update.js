import update from 'immutability-helper'

// add any extensions to update here, then export the updated update :)
// reference here: https://github.com/kolodny/immutability-helper

const recursiveSumUpdate = (newVal, oldVal) => {
  const ret = {}
  const keys = Object.keys(newVal)
  if (keys.length === 0) {
    if (typeof newVal !== 'number' || typeof oldVal !== 'number') throw new Error('Can add only numbers')
    else return newVal + oldVal
  }
  keys.forEach((key) => {
    if (oldVal === undefined || oldVal[key] === undefined) {
      throw new Error(`Key '${key}' not found in '${oldVal}'`)
    }
    ret[key] = recursiveSumUpdate(newVal[key], oldVal[key])
  })
  return ret
}

update.extend('$sum', (value: any, original: any) => recursiveSumUpdate(value, original))

export default update
