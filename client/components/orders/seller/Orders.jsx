import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllOrders } from '../../../apiClient'

import { getQueuedOrdersThunk } from '../../../actions/orders'
import { getWaitTime } from '../../../actions/time'

import Order from './Order'

export default function Orders() {
  // const [orders, setOrders] = useState(null)
  const dispatch = useDispatch()
  const orders = useSelector((Reduxstore) => Reduxstore.orders)
  const waitTime = useSelector((Reduxstore) => Reduxstore.waitTime)

  useEffect(() => {
    dispatch(getQueuedOrdersThunk())
    dispatch(getWaitTime(orders))
  }, [orders])

  return (
    <div>
      <h1 className="text-lg font-bold m-6">
        Current customer wait time is {waitTime} minutes
      </h1>
      <div className="flex flex-wrap">
        {orders &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </div>
  )
}
