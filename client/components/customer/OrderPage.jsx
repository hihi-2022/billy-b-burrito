import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import OrderForm from './OrderForm'
import { getWaitTime } from '../../actions/time'
import { getQueuedOrders } from '../../apiClient'

function Order() {
  const dispatch = useDispatch()
  const [hasOrdered, setHasOrdered] = useState(false)
  const waitTime = useSelector((Reduxstore) => Reduxstore.waitTime)

  useEffect(() => {
    getQueuedOrders()
      .then((orders) => {
        dispatch(getWaitTime(orders))
      })
      .catch((err) => err.message)
  }, [])

  return (
    <>
      {hasOrdered ? (
        <div className="text-xl bg-[#C6D8D3] px-6 py-6 rounded-lg my-12">
          <p>Your order was submitted successfully!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center font-['Poor_Story'] my-4">
            Current Estimated Wait time is {waitTime} minutes
          </h1>
          <OrderForm hasOrderedFunc={setHasOrdered} />
        </div>
      )}
    </>
  )
}

export default Order
