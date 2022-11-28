import { combineReducers } from 'redux'
import navigateReducer from './navigate'

import ordersReducer from './orders'
import stockReducer from './stock'
import waitTimeReducer from './waitTime'

export default combineReducers({
  orders: ordersReducer,
  waitTime: waitTimeReducer,
  activePage: navigateReducer,
  stock: stockReducer,
})
