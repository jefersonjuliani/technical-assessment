import { styled } from '@theme/index';

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  width: '100%',
  height: '100%',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
        maxHeight: '750px',
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
