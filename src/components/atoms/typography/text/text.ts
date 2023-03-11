import { styled } from '@theme/index';

export const Text = styled('span', {
  margin: '0',
  fontWeight: 400,
  display: 'block',

  lineHeight: '$base',
  fontFamily: '$default',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      base: {
        fontSize: '$base',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      xs: {
        fontSize: '$xs',
      },
    },
    variant: {
      white: {
        color: 'white',
      },
    },
  },

  defaultVariants: {
    size: 'base',
    variant: 'white',
  },
});
