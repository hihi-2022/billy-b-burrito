import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Import custom components
import Nav from './common/Nav.jsx'
import Home from './home/Home.jsx'
import Login from './authentication/Login.jsx'
import Order from './orders/customer/OrderPage'
import Orders from './orders/seller/Orders'

function App() {
  return (
    <>
      <Nav />
      <div className="bg-[#FDF0D5] text-black flex justify-center">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Orders />} />
        </Routes>
      </div>
    </>
  )
}

export default App
