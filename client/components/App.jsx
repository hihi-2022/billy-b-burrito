import React from 'react'
// import { Route, Routes } from 'react-router-dom'

//Import custom components
import Nav from './common/Nav.jsx'
import Home from './home/Home.jsx'
import Order from './customer/OrderPage'
import Orders from './seller/Orders'
import Stock from './seller/Stock'
import { useSelector } from 'react-redux'

function App() {
  const pageToDisplay = useSelector((glob) => glob.activePage)

  return (
    <>
      <Nav />
      <div className="bg-[#FDF0D5] text-black bg-cover h-screen p-5">
        {pageToDisplay == 'home' && <Home />}
        {pageToDisplay == 'order' && <Order />}
        {pageToDisplay == 'seller_orders' && <Orders />}
        {pageToDisplay == 'stock' && <Stock />}
      </div>
    </>
  )
}

export default App
