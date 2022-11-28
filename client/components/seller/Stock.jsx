import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StockItem from './StockItem'
import { getStockThunk } from '../../actions/stock'

export default function Stock() {
  const dispatch = useDispatch()
  const stock = useSelector((redux) => redux.stock)

  useEffect(() => {
    dispatch(getStockThunk())
  }, [])

  return (
    <>
      <h1 className="font-bold text-xl mx-8">Current Stock</h1>
      <div className="flex flex-col bg-[#c6d8d3] rounded-lg m-5 p-5 w-fit">
        <div className="list-none flex font-bold text-lg">
          <div className="mx-2 w-60">Name </div>
          <div>Quantity</div>
        </div>
        {stock &&
          stock.map((item) => <StockItem stock_item={item} key={item.id} />)}
      </div>
    </>
  )
}
