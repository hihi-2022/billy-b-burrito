import { getAllOrders, updateOrder } from '../apiClient'

export const GET_ORDERS = 'GET_ORDERS'
export const UPDATE_ORDERS = 'UPDATE_ORDERS'
// export const DELETE_ART = 'DELETE_ART'

// ACTIONS
export function getOrdersAction(orders) {
  return {
    type: GET_ORDERS,
    payload: orders,
  }
}

export function updateOrdersAction(updatedOrder) {
  return {
    type: UPDATE_ORDERS,
    payload: updatedOrder,
  }
}

//ACTIONS

// THUNKS
// Get orders
export function getOrdersThunk() {
  return (dispatch) => {
    getAllOrders()
      .then((orders) => {
        dispatch(getOrdersAction(orders))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

// update order status
export function updateOrderThunk(newOrder) {
  return (dispatch) => {
    updateOrder(newOrder)
      .then(() => {
        dispatch(updateOrdersAction(newOrder))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
