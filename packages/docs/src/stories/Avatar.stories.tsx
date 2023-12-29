import { Avatar, AvatarProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Dysplay/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/thiagomf712.png',
    alt: 'Thiago Ferreira',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
