import { styled } from './styles'

export type ButtonProps = {
  size: 'small' | 'big'
  variant: 'primary' | 'secondary' | 'tertiary'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $8',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$ignite500',
      },
      secondary: {
        backgroundColor: '$ignite300',
      },
      tertiary: {
        backgroundColor: '$ignite100',
      },
    },
  },
})
