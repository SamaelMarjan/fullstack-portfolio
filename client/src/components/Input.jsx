import React from 'react'

const Input = ({label, labelname, placeholder, type, className, name, id}) => {
  return (
    <div>
      <label htmlFor={label}>{labelname}</label>
      <input placeholder={placeholder} type={type} className={className} name={name} id={id} />
    </div>
  )
}

export default Input