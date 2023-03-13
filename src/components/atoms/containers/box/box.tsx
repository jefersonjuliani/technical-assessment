import { styled } from '@theme/index';

export const Box = styled('div', {
  boxSizing: 'border-box',

  variants: {
    overflow: {
      auto: {
        overflow: 'auto',
      },
    },
    flex: {
      '1': {
        flex: 1,
      },
      '2': {
        flex: 2,
      },
      '3': {
        flex: 3,
      },
      '4': {
        flex: 4,
      },
    },
    width: {
      full: {
        width: '100%',
      },
    },
    height: {
      full: {
        height: '100%',
      },
      xs: {
        height: '$5xl',
      },
      sm: {
        height: '$6xl',
      },
      md: {
        height: '$7xl',
      },
      lg: {
        height: '$8xl',
      },
    },
    size: {
      full: {
        height: '100%',
        width: '100%',
      },
    },
    mx: {
      xs: {
        mx: '$xs',
      },
      sm: {
        mx: '$sm',
      },
      md: {
        mx: '$md',
      },
      lg: {
        mx: '$lg',
      },
    },
    my: {
      xs: {
        my: '$xs',
      },
      sm: {
        my: '$sm',
      },
      md: {
        my: '$md',
      },
      lg: {
        my: '$lg',
      },
    },
    px: {
      xs: {
        px: '$xs',
      },
      sm: {
        px: '$sm',
      },
      md: {
        px: '$md',
      },
      lg: {
        px: '$lg',
      },
    },
    py: {
      xs: {
        py: '$xs',
      },
      sm: {
        py: '$sm',
      },
      md: {
        py: '$md',
      },
      lg: {
        py: '$lg',
      },
    },
  },
});
