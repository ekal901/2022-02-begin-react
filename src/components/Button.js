import React from 'react'
import './Button.scss'

const Button = ({children, size}) => {
  return (
    <button className={['Button', size].join(' ')}>{children}</button>
  )
}

export default Button