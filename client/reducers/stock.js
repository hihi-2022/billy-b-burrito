import { GET_STOCK, UPDATE_STOCK } from '../actions/stock'

const stockReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_STOCK:
      return payload
    case UPDATE_STOCK:
      return state
    //complete reducer
    default:
      return state
  }
}

export default stockReducer
