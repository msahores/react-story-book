import React from 'react'
import './Input.css'

const Input = ({size = 'medium', value = null, ...rest}) => (
  <input type='text' className={`input ${size}`} value={value} {...rest} />
)

export default Input
