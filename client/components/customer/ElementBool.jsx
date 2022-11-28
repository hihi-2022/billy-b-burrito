import React from 'react'

export default function ElementBool(props) {
  const { label, name, handleInputFunc, value, checked, index } = props

  return (
    <div className="flex justify-between">
      <label htmlFor={name}>{label}</label>
      <input
        className="w-5 h-auto"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => {
          handleInputFunc(index, e)
        }}
        // defaultChecked={true}
      ></input>
    </div>
  )
}
