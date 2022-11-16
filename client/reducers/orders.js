import { GET_ORDERS, UPDATE_ORDERS } from '../actions/orders'

const ordersReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ORDERS:
      return payload
    case UPDATE_ORDERS:
      console.log('updating_orders')
      state[state.findIndex((obj) => obj.id === payload.id)] = payload
      return state
    default:
      return state
  }
}

export default ordersReducer
