import React from 'react'

const Button = ({ onClick, className, icon, text, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}>

      {icon ? <i className={icon}></i> : null}
      {text ? <>&nbsp;{text}</> : null}
    </button>
  )
}

export default Button
