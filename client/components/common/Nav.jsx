import React from 'react'
import { Link } from 'react-router-dom'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../authentication/Authenticated'

function Nav() {
  function handleLogOff(e) {
    e.preventDefault()
    console.log('log off')
  }

  // function handleSignIn(e) {
  //   e.preventDefault()
  //   console.log('sign in')
  // }

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
      <div className="flex">
        <IfNotAuthenticated>
          <Link
            to="/Login"
            className="btn bg-[#3A3335] border-0 normal-case text-xl text-white mx-10"
          >
            Login
          </Link>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <Link
            to="/"
            className="btn bg-[#3A3335] border-0 normal-case text-xl text-white"
            onClick={handleLogOff}
          >
            Logout
          </Link>
        </IfAuthenticated>
      </div>
    </div>
  )
}

export default Nav
