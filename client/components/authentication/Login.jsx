import React from 'react'
// import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="py-40">
      <form>
        <div className="form-control w-80">
          <label className="label cursor-pointer">
            <span className="label-text text-black text-base">
              Login as Admin
            </span>
            <input type="checkbox" className="toggle" checked />
          </label>
          <div className="flex justify-between items-center px-1">
            <label htmlFor="email">Email:</label>
            <input name="email" className="my-2 w-56 text-sm h-6"></input>
          </div>
          <div className="flex justify-between items-center px-1">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              className="my-2 w-56"
            ></input>
          </div>
          <button className="btn my-8 mx-20">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
