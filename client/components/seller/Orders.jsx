import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllOrders } from '../../../apiClient'

import { getQueuedOrdersThunk } from '../../actions/orders'
import { getWaitTime } from '../../actions/time'

import OrderItem from './OrderItem'

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
      <div className="bg-[#c6d8d3] rounded-md mx-8 my-4 text-center">
        <h1 className="text-lg font-bold px-5">
          Customer wait time is {waitTime} minutes
        </h1>
      </div>
      <div className="flex flex-wrap">
        {orders &&
          orders.map((order) => <OrderItem key={order.id} order={order} />)}
      </div>
    </div>
  )
}
