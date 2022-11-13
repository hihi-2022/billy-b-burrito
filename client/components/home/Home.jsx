import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    // <div className="bg-[#FDFCDC] text-black h-screen flex justify-center">
    <div className="space-y-6 flex flex-col py-20">
      <img
        className="h-40 w-40 self-center"
        src="../../images/burrito.png"
        alt="burritto"
      ></img>
      <h1 className="font-['Poor_Story'] text-5xl text-[#00AFB9] text-center">
        Billy-B&apos;s Burrittos
      </h1>
      <span className="py-5"></span>
      <Link
        to="/Order"
        className="btn sm:btn-sm md:btn-md lg:btn-lg bg-[#00AFB9] text-white border-0"
      >
        Place Order
      </Link>
    </div>
    // </div>
  )
}

export default Home
