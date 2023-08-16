import React from 'react'

const Input = ({ name, type, placeholder, className, icon }) => {
  return (
    <div className="d-input">
      <i className={icon}></i>
      <input
        name={name}
        type={type}
        className={className}
        placeholder={placeholder} />
    </div>
  )
}

export default Input