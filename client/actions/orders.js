import { getQueuedOrders, updateOrder } from '../apiClient'

export const GET_ORDERS = 'GET_ORDERS'
export const UPDATE_ORDERS = 'UPDATE_ORDERS'
export const GET_QUEUED_ORDERS = 'GET_QUEUED_ORDERS'
// export const DELETE_ART = 'DELETE_ART'

// ACTIONS
export function getQueuedOrdersAction(queuedOrders) {
  return {
    type: GET_QUEUED_ORDERS,
    payload: queuedOrders,
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
export function getQueuedOrdersThunk() {
  return (dispatch) => {
    getQueuedOrders()
      .then((orders) => {
        dispatch(getQueuedOrdersAction(orders))
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
