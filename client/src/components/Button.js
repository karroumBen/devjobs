import React from 'react'

const Button = ({ className, icon, text }) => {
  return (
    <button className={className}>
      <i className={icon}></i>&nbsp;{text}
    </button>
  )
}

export default Button