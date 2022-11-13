import React from 'react'

export default function ElementBool(props) {
  const { label, name, handleInputFunc } = props

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" name={name} onChange={handleInputFunc}></input>
      <br></br>
    </>
  )
}
