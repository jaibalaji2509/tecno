import { setInitialState as appInitialState } from './DiagramEditor/state.js'
import { compose } from './utils/helpers'

const state = {}

export default () => compose(
  appInitialState,
)(state)
