import React from 'react'
import { capitalize } from '../../lib/utils'

export default function StockItem({ stock_item }) {
  const { item, unit_of_measure, quantity } = stock_item

  return (
    <div className="flex list-none mx-2 gap-10">
      <div className="text-lg w-52">{capitalize(item)}</div>
      <div className="text-lg w-20 text-center">
        {quantity}
        {unit_of_measure != 'number' && ' ' + unit_of_measure[0]}
      </div>
    </div>
  )
}
