import React from 'react'

export default function ElementBool(props) {
  const { label, name, handleInputFunc } = props

  return (
    <div className="flex justify-between">
      <label htmlFor={name}>{label}</label>
      <input
        className="w-5 h-auto"
        type="checkbox"
        name={name}
        onChange={handleInputFunc}
      ></input>
    </div>
  )
}
