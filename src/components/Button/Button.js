import React from 'react'
import './Button.css';

const Button = ({variant = 'primary', children, ...rest}) => (
  <button className={`button ${variant}` } {...rest}>{children}</button>
  )

export default Button
