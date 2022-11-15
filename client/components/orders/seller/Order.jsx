import React from 'react'

export default function Order(props) {
  const {
    name,
    filling,
    rice,
    beans,
    lettuce,
    tomato,
    cheese,
    sour_cream,
    quacamole,
  } = props.order

  return (
    <div className="flex mx-8 my-8">
      <ul className="bg-slate-500 text-white list-none">
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
    </div>
  )
}
