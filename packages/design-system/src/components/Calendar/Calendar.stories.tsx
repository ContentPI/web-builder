import React from 'react'

import Calendar from './index'

const stories = {
  component: 'Calendar',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: 'null',
      description: 'The content of the component'
    },
    {
      name: 'color',
      type: 'Color',
      default: 'primary',
      description: 'The color of the button'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Enables the full width of the alert'
    }
  ],
  stories: [
    {
      name: 'Calendar',
      description: 'Calendar',
      render: <Calendar />,
      prop: false,
      code: `
      <Calendar />
      `
    }
  ]
}

export default stories
