import React, { useState } from 'react'

function SpiceScale(props) {
  const [spiceLevel, setSpiceLevel] = useState(1)
  const { handleInputFunc } = props
  function changeSpiceLevel(e) {
    setSpiceLevel(e.target.value)
    handleInputFunc(e)
  }

  return (
    <>
      <h1 className="my-1">Spice Level</h1>
      <input
        name="spice_level"
        type="range"
        min={1}
        max={3}
        value={spiceLevel}
        className="range w-46"
        step={1}
        onChange={changeSpiceLevel}
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div className="w-full flex justify-between text-xs px-1 py-1">
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
