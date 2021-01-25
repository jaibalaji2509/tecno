import { forwardReducerTo } from './utils/helpers'
import getInitialState from './initialState'

const rootReducer = (state = getInitialState(), action) => {
  if (!action.reducer) return state // fallback for actions from different sources

  if (!action.path) {
    throw new Error('You forgot action.path in action ' + action.type)
  }

  return forwardReducerTo(action.reducer, action.path)(state, action.payload)
}

export default rootReducer
