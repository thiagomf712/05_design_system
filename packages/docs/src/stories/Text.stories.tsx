import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typograpy/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat ea explicabo et, doloribus laboriosam cupiditate ut! Dolores dolorum nemo sequi sint architecto amet, ipsum quod incidunt repellat! Commodi, ex!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
