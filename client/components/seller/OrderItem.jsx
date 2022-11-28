import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrderThunk } from '../../actions/orders'
import { updateWaitTime } from '../../actions/time'

export default function OrderItem(props) {
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
    hot_sauce,
    spice_level,
  } = props.order

  function handleClick(e) {
    const newStatus = e.target.id
    const newOrder = { ...props.order, order_status: newStatus }
    dispatch(updateOrderThunk(newOrder))
    dispatch(updateWaitTime(newOrder))
  }

  return (
    <div className="flex flex-col m-8 bg-[#c6d8d3] w-60 rounded-xl p-4">
      <div className="mx-2">
        <ul className="list-none">
          <li className="text-xl my-1 font-bold">Order #{id}</li>
          <li className="font-bold my-2">{name}</li>
          <li className="capitalize">{filling}</li>
          {rice ? <li></li> : <li>No Rice</li>}
          {beans ? <li></li> : <li>No Beans</li>}
          {lettuce ? <li></li> : <li>No Lettuce</li>}
          {tomato ? <li></li> : <li>No Tomato</li>}
          {cheese ? <li></li> : <li>No Cheese</li>}
          {sour_cream ? <li></li> : <li>No Sour Cream</li>}
          {quacamole ? <li></li> : <li>No Quacamole</li>}
          {hot_sauce ? <li></li> : <li>No Hot sauce</li>}
          {hot_sauce ? <li>Spice Level: {spice_level}</li> : <li></li>}
        </ul>
      </div>
      <button
        className="bg-[#3A3335] text-white my-4 mx-2 rounded-md font-bold justify-self-end"
        id="order completed"
        onClick={handleClick}
      >
        Mark as completed
      </button>
    </div>
  )
}
