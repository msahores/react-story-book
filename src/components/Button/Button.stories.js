import React from 'react'
import Button from './Button'

export default {
  title: 'form/Button', 
  component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Sucess</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args'
}

export const PrimaryB = Template.bind({})
PrimaryB.args = {
  variant: 'secondary',
  children: 'Secondary Args'
}

//reuse args from other story:
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args'
}


