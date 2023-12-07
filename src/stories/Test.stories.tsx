import React from 'react'
import Test from './Test'

export default {
  title: 'Components/Test',
  component: Test
}

export const Default: React.FC = (args: any) => <Test {...args} />
