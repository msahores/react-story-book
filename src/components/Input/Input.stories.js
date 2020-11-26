import React from 'react'
import Input from './Input'

export default {
  title: 'form/Input', 
  component: Input
}

export const Small = () => <Input size='small' value='Small' />
export const Medium = () => <Input size='medium' value='Medium' />
export const Large = () => <Input size='large' value='Large' />