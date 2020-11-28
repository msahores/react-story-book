import React from 'react'
import Button from './Button'

export default {
  title: 'form/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
	parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Args'
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Danger'
}
