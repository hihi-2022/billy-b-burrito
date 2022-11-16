import { combineReducers } from 'redux'

import ordersReducer from './orders'
import waitTimeReducer from './waitTime'

export default combineReducers({
  orders: ordersReducer,
  waitTime: waitTimeReducer,
})
