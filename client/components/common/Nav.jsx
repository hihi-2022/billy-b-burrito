import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="navbar bg-[#F0544F]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
          Home
        </Link>
        <Link
          to="/Admin"
          className="btn btn-ghost normal-case text-xl text-white"
        >
          Admin
        </Link>
      </div>
      <div className="flex-none">
        <Link
          to="/Login"
          className="btn bg-[#3A3335] border-0 normal-case text-xl text-white"
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Nav
