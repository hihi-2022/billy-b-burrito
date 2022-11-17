import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import OrderForm from './OrderForm'
import { getWaitTime } from '../../../actions/time'
import { getAllOrders } from '../../../apiClient'

function Order() {
  const dispatch = useDispatch()
  const [hasOrdered, setHasOrdered] = useState(false)
  const waitTime = useSelector((Reduxstore) => Reduxstore.waitTime)

  useEffect(() => {
    getAllOrders()
      .then((orders) => {
        console.log(orders)
        dispatch(getWaitTime(orders))
      })
      .catch((err) => err.message)
  }, [])

  return (
    <div>
      {hasOrdered ? (
        <div className="text-xl bg-[#C6D8D3] px-6 py-6 rounded-lg my-12">
          <p>Your order was submitted successfully!</p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl text-center font-['Poor_Story'] my-6">
            Current Estimated Wait time is {waitTime} minutes
          </h1>
          <OrderForm hasOrderedFunc={setHasOrdered} />
        </>
      )}
    </div>
  )
}

export default Order
