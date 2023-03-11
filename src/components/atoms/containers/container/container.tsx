import { styled } from '@theme/index';

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      none: {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: 'none',
  },
});
