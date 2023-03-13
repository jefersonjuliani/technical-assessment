import { styled } from '@theme/index';

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    size: {
      fullView: {
        height: '100vh',
        width: '100vw',
      },
      full: {
        height: '100%',
        width: '100%',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
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

  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});
