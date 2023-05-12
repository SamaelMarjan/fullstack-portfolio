import React from 'react'

const Button = ({button, className}) => {
  return (
    <div>
      <div className={className}>{button}</div>
    </div>
  )
}

export default Button