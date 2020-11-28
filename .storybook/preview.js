import React from 'react'
import Center from '../src/components/Center/Center'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
      storySort: (a, b) =>
        a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
}

export const decorators = [
  Story => (
    <Center>
      <Story />
    </Center>
  )
]