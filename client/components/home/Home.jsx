import React from 'react'
import { useDispatch } from 'react-redux'
import { IfNotAuthenticated } from '../authentication/Authenticated'

import { navigate } from '../../actions'

function Home() {
  const dispatch = useDispatch()

  function clickHandler(e) {
    const destination = e.target.name
    dispatch(navigate(destination))
  }

  return (
    // <div className="bg-[#FDFCDC] text-black h-screen flex justify-center">
    <div className="space-y-6 flex flex-col py-20 items-center">
      <img
        className="h-40 w-40 self-center"
        src="../../images/burrito.png"
        alt="burritto"
      ></img>
      <h1 className="font-['Poor_Story'] text-5xl text-[#3A3335] text-center">
        Billy-B&apos;s Burrittos
      </h1>
      <span className="py-5"></span>
      <IfNotAuthenticated>
        <button
          onClick={clickHandler}
          className="btn sm:btn-sm md:btn-md lg:btn-lg bg-[#3A3335] text-white border-0 w-48"
          name="order"
        >
          Place Order
        </button>
      </IfNotAuthenticated>
    </div>
    // </div>
  )
}

export default Home
