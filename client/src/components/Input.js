import React from 'react'

const Input = ({
  name,
  value,
  type,
  placeholder,
  className,
  icon,
  onChange,
}) => {
  return (
    <div className="d-input">
      <input
        value={value}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}/>

        { icon ?  <i className={icon}></i> : <></>}
    </div>
  )
}

export default Input