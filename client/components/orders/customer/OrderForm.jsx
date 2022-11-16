import React, { useState } from 'react'
import { submitOrder } from '../../../apiClient'

import ElementBool from './ElementBool'

export default function OrderForm({ hasOrderedFunc }) {
  const [order, setOrder] = useState({
    filling: '',
    rice: false,
    beans: false,
    lettuce: false,
    quacamole: false,
    tomato: false,
    cheese: false,
    sour_cream: false,
  })

  function handleOrder(e) {
    e.preventDefault()
    submitOrder(order)
    hasOrderedFunc(true)
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
    <div className="bg-[#00AFB9] flex flex-col py-5 h-fit my-8">
      <form>
        <label htmlFor="name">Please enter name for order: </label>
        <input name="name" onChange={handleInput}></input>
        <br></br>
        <label htmlFor="filling">Choose your main filling:</label>
        <select name="filling" id="filling" onChange={handleInput}>
          <option disabled selected value>
            select
          </option>
          <option value="chicken">Chicken</option>
          <option value="beef">Beef</option>
          <option value="jack fruit">Jack fruit</option>
        </select>
        <br></br>
        {/* TODO: Make this dynamic - draws from ingredient list in database, maps through and lists out. */}
        <ElementBool name="rice" label="Rice" handleInputFunc={handleInput} />
        <ElementBool name="beans" label="Beans" handleInputFunc={handleInput} />
        <ElementBool
          name="lettuce"
          label="Lettuce"
          handleInputFunc={handleInput}
        />
        <ElementBool
          name="quacamole"
          label="Quacamole"
          handleInputFunc={handleInput}
        />
        <ElementBool
          name="tomato"
          label="Tomato"
          handleInputFunc={handleInput}
        />
        <ElementBool
          name="cheese"
          label="Cheese"
          handleInputFunc={handleInput}
        />
        <ElementBool
          name="sour_cream"
          label="Sour Cream"
          handleInputFunc={handleInput}
        />
        <button
          className="btn bg-slate-600 border-0 text-sm text-white my-2"
          onClick={handleOrder}
        >
          Submit Order
        </button>
      </form>
    </div>
  )
}
