import { NAVIGATE } from '../actions/'

const navigateReducer = (state = 'home', action) => {
  const { type, payload } = action
  switch (type) {
    case NAVIGATE:
      return payload
    default:
      return state
  }
}

export default navigateReducer
