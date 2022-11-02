import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex p-6 bg-rose-500 space-x-4 ">
      <img
        src="../images/burrito.png"
        alt="Burritto"
        className="w-12 h-12"
      ></img>
      <Link to="/" className="text-xl text-justify">
        Home
      </Link>
    </div>
  )
}

export default Nav
