import React from 'react'
import { updateOrderThunk } from '../../../actions/orders'

export default function Order(props) {
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

  // const [order, setOrder] = useState(props.order)

  function handleClick(e) {
    const newStatus = e.target.value
    const newOrder = { ...props.order, order_status: newStatus }
    // setOrder(newOrder)
    updateOrderThunk(newOrder)
  }

  return (
    <div className="flex flex-col mx-8 my-8 bg-slate-400 w-60">
      <ul className="list-none">
        <li className="text-xl my-4 font-bold">Order #: {id}</li>
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
      <h1>Status: {order_status}</h1>
      <button className="bg-white text-black mx-2 my-2" onClick={handleClick}>
        Order completed
      </button>
    </div>
  )
}
