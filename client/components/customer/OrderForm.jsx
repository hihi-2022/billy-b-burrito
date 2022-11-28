import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStock, submitOrder } from '../../apiClient'
import { updateWaitTime } from '../../actions/time'
import ElementBool from './ElementBool'
import {
  checkInputValid,
  singleBurritto,
  capitalize,
  underscoreToSpace,
  updateQuantitiesFromOrder,
} from '../../lib/utils'
import SpiceScale from './SpiceScale'
import { updateStockThunk } from '../../actions/stock'

export default function OrderForm({ hasOrderedFunc }) {
  const dispatch = useDispatch()
  const ingredients = Object.keys(singleBurritto)

  const [checkedState, setCheckedState] = useState(
    new Array(ingredients.length).fill(true)
  )

  const handleCheckBoxInput = (position, e) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState)
    const name = e.target.name
    const value = updatedCheckedState[position]
    const newOrder = {
      ...order,
      [`${name}`]: value,
    }
    setOrder(newOrder)
  }

  const [order, setOrder] = useState({
    filling: '',
    rice: true,
    beans: true,
    lettuce: true,
    quacamole: true,
    tomato: true,
    cheese: true,
    sour_cream: true,
    hot_sauce: true,
    spice_level: 1,
    order_status: 'in queue',
  })

  const [error, setError] = useState(null)

  async function handleOrder(e) {
    e.preventDefault()
    if (checkInputValid(order, setError)) {
      submitOrder(order)
      const stock = await getStock()
      console.log(stock)
      const newStock = updateQuantitiesFromOrder(order, stock)
      console.log(newStock)
      dispatch(updateStockThunk(newStock))
      dispatch(updateWaitTime(order))
      hasOrderedFunc(true)
    }
  }

  function handleInput(e) {
    const value = e.target.value
    const name = e.target.name
    const newOrder = {
      ...order,
      [`${name}`]: value,
    }
    setOrder(newOrder)
  }

  return (
    <div className="flex flex-col py-5 mx-4 h-fit my-4 bg-[#C6D8D3] items-center rounded-md w-80">
      {error && (
        <div className="bg-[#F0544F] px-2 py-1 rounded-lg">{error}</div>
      )}
      <form>
        <div className="flex-col flex justify-center my-4">
          <label htmlFor="name">Name for order:</label>
          <input
            name="name"
            className="rounded-sm text-white"
            onChange={handleInput}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="filling">Choose your main filling:</label>
          <select
            className="text-white rounded-sm"
            defaultValue="select"
            name="filling"
            onChange={handleInput}
          >
            <option disabled>select</option>
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="jack fruit">Jack fruit</option>
          </select>
        </div>
        <br></br>
        {ingredients.map(
          (item, index) =>
            item != 'filling' && (
              <ElementBool
                name={item}
                label={capitalize(underscoreToSpace(item))}
                handleInputFunc={handleCheckBoxInput}
                checked={checkedState[index]}
                key={item}
                index={index}
              />
            )
        )}
        {order['hot_sauce'] != false && (
          <SpiceScale handleInputFunc={handleInput} />
        )}
        <div className="flex justify-center my-4">
          <button
            className="btn bg-[#3A3335] border-0 text-sm text-white my-2 self-center"
            onClick={handleOrder}
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  )
}
