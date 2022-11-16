import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getAllOrders } from '../../../apiClient'

import { getOrdersThunk } from '../../../actions/orders'

import Order from './Order'

export default function Orders() {
  // const [orders, setOrders] = useState(null)
  const dispatch = useDispatch()
  const orders = useSelector((Reduxstore) => Reduxstore.orders)

  useEffect(() => {
    dispatch(getOrdersThunk())
  }, [orders])

  return (
    <div>
      <h1>Latest orders</h1>
      {/* <button onClick={handleClick}>Get latest orders</button> */}
      <div className="flex flex-wrap">
        {orders &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </div>
  )
}
