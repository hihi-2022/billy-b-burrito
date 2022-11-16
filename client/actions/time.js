export const UPDATE_WAIT_TIME = 'UPDATE_WAIT_TIME'
export const GET_WAIT_TIME = 'GET_WAIT_TIME'

// ACTIONS
export function updateWaitTime(order) {
  return {
    type: UPDATE_WAIT_TIME,
    payload: order,
  }
}

export function getWaitTime(orders) {
  return {
    type: GET_WAIT_TIME,
    payload: orders,
  }
}
