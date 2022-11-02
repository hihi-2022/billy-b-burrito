import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Import custom components
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
