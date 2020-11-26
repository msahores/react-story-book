import React from 'react'
import './Input.css'

const Input = ({size = 'medium', value = '', ...rest}) => (
  <input type='text' className={`input ${size}`} value={value} {...rest} />
)

export default Input
