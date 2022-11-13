import React from 'react'

function SpiceScale() {
  return (
    <>
      <h1>How Spicy?</h1>
      <input
        type="range"
        min="0"
        max="100"
        value="25"
        className="range"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div className="w-full flex justify-between text-xs px-1 py-2">
        <span>
          <img
            className="h-3 w-3"
            src="../../images/chilli-pepper.png"
            alt="chilli pepper"
          ></img>
        </span>
        <span>
          <img
            className="h-3 w-3"
            src="../../images/chilli-pepper.png"
            alt="chilli pepper"
          ></img>
          <img
            className="h-3 w-3"
            src="../../images/chilli-pepper.png"
            alt="chilli pepper"
          ></img>
        </span>
        <span>
          <img
            className="h-3 w-3"
            src="../../images/chilli-pepper.png"
            alt="chilli pepper"
          ></img>
          <img
            className="h-3 w-3"
            src="../../images/chilli-pepper.png"
            alt="chilli pepper"
          ></img>
          <img
            className="h-3 w-3"
            src="../../images/chilli-pepper.png"
            alt="chilli pepper"
          ></img>
        </span>
      </div>
    </>
  )
}

export default SpiceScale
