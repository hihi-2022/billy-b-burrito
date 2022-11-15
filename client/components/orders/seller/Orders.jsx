import React, { useState } from 'react'
import { getAllOrders } from '../../../apiClient'

import Order from './Order'

export default function Orders() {
  const [orders, setOrders] = useState(null)

  function handleClick(evt) {
    evt.preventDefault()
    console.log('getting orders..')
    getAllOrders()
      .then((latestOrder) => {
        setOrders(latestOrder)
      })
      .catch((err) => err.message)
  }

  return (
    <div>
      <h1>Latest orders</h1>
      <button onClick={handleClick}>Get latest orders</button>
      <div className="flex flex-wrap">
        {orders &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </div>
  )
}
