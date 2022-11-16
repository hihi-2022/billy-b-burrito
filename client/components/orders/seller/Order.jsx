import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrderThunk } from '../../../actions/orders'
import { updateWaitTime } from '../../../actions/time'

export default function Order(props) {
  const dispatch = useDispatch()
  const {
    id,
    name,
    filling,
    rice,
    beans,
    lettuce,
    tomato,
    cheese,
    sour_cream,
    quacamole,
    order_status,
  } = props.order

  function handleClick(e) {
    const newStatus = e.target.id
    const newOrder = { ...props.order, order_status: newStatus }
    dispatch(updateOrderThunk(newOrder))
    dispatch(updateWaitTime(newOrder))
  }

  return (
    <div className="flex flex-col mx-8 my-8 bg-slate-400 w-60">
      <ul className="list-none">
        <li className="text-xl my-4 font-bold">Order #{id}</li>
        <li>Name: {name}</li>
        <li>Filling: {filling}</li>
        <li>Rice: {rice}</li>
        <li>Beans: {beans}</li>
        <li>Lettuce: {lettuce}</li>
        <li>Tomato: {tomato}</li>
        <li>Cheese: {cheese}</li>
        <li>Sour Cream: {sour_cream}</li>
        <li>Quacamole: {quacamole}</li>
      </ul>
      <h1 className="text-red-500 text-lg font-bold">{order_status}</h1>
      <button
        className="bg-white text-black mx-2 my-2"
        id="order completed"
        onClick={handleClick}
      >
        Mark as completed
      </button>
    </div>
  )
}
