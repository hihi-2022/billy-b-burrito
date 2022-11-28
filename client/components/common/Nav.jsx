import React from 'react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../authentication/Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { navigate } from '../../actions/'

function Nav() {
  const dispatch = useDispatch()
  const { loginWithRedirect, logout } = useAuth0()

  function handleLogOff(e) {
    e.preventDefault()
    logout()
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleClick(e) {
    const destination = e.target.name
    dispatch(navigate(destination))
  }

  return (
    <div className="navbar bg-[#F0544F]">
      <div className="flex-1">
        <IfNotAuthenticated>
          <button
            onClick={handleClick}
            name="home"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Home
          </button>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <button
            onClick={handleClick}
            name="seller_orders"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Orders
          </button>
          <button
            onClick={handleClick}
            name="analytics"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Analytics
          </button>
          <button
            onClick={handleClick}
            name="stock"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Stock
          </button>
        </IfAuthenticated>
      </div>
      <div className="flex">
        <IfNotAuthenticated>
          <button
            className="btn bg-[#3A3335] border-0 normal-case text-xl text-white mx-10"
            onClick={handleSignIn}
          >
            Seller Login
          </button>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <button
            className="btn bg-[#3A3335] border-0 normal-case text-xl text-white"
            onClick={handleLogOff}
          >
            Logout
          </button>
        </IfAuthenticated>
      </div>
    </div>
  )
}

export default Nav
