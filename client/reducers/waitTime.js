import { UPDATE_WAIT_TIME, GET_WAIT_TIME } from '../actions/time'

const waitTimeReducer = (state = 0, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_WAIT_TIME:
      state = 0
      payload.forEach((element) => {
        if (element.order_status === 'in queue') {
          state += 2
        }
      })
      return state
    case UPDATE_WAIT_TIME:
      console.log('in reducer')
      console.log(payload)
      if (payload.order_status && payload.order_status === 'in queue') {
        return state + 2
      } else if (
        payload.order_status &&
        payload.order_status === 'order completed'
      ) {
        return state - 2
      } else {
        return state
      }
    default:
      return state
  }
}

export default waitTimeReducer
