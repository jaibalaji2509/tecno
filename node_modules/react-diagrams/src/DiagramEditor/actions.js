import {PATH_APP} from './state'

export const toggleButtonText = () => ({
  type: 'Toggle button text',
  path: [...PATH_APP, 'buttonText'],
  reducer: (state) => (state === 'Hello' ? 'World!' : 'Hello'),
})
