import {setIn, getIn} from '../utils/helpers'

export const PATH_APP = ['app']

export const setInitialState = (state) =>
  setIn(state, PATH_APP, {
    buttonText: 'Hello',
  }, true)

export const buttonTextSelector = (state) => getIn(state, [...PATH_APP, 'buttonText'])
