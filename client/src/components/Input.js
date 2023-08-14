import React from 'react'

const Input = ({ type, placeholder, className, icon }) => {
  return (
    <div className="d-input">
      <i className={icon}></i>
      <input
        type={type}
        className={className}
        placeholder={placeholder} />
    </div>
  )
}

export default Input