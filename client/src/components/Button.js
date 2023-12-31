import React from 'react'

const Button = ({ onClick, className, icon, text }) => {
  return (
    <button
      onClick={onClick}
      className={className}>

      <i className={icon}></i>
      {text ? <>&nbsp;{text}</>: <></>}
    </button>
  )
}

export default Button