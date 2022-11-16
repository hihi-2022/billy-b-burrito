import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

import OrderForm from './OrderForm'

function Order() {
  const [hasOrdered, setHasOrdered] = useState(false)

  return (
    <div className="">
      {/* //TODO: dynamically populate wait time */}
      <h1 className="text-2xl text-center font-['Poor_Story']">
        Current Estimated Wait time is x...
      </h1>
      {hasOrdered ? (
        <h3>
          Thank you for your order,<br></br>Your xx in the queue
        </h3>
      ) : (
        <OrderForm hasOrderedFunc={setHasOrdered} />
      )}
    </div>
  )
}

export default Order
