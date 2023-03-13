import { styled } from '@theme/index';

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  lineHeight: '$base',
  fontFamily: '$muliBold',

  '&:focus': {
    boxShadow: '0 0 0 2px $lg',
  },
  '&:active': {
    transform: 'scale(0.97)',
    boxShadow: '$md',
  },

  variants: {
    variant: {
      outiline: {
        border: '1px solid white',
      },
    },
    color: {
      blue: {
        backgroundColor: '$blue10',
        color: 'white',
        borderColor: '$blue7',
        '&:hover': {
          backgroundColor: '$blue11',
          borderColor: '$blue8',
        },

        '&:disabled': {
          backgroundColor: '$blue7',
          borderColor: '$blue5',

          color: '$gray11',
        },
      },
      blue2: {
        backgroundColor: 'transparent',
        color: 'white',

        '&:hover': {
          backgroundColor: '$blue7',
        },
      },
    },
    width: {
      full: {
        width: '100%',
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',

        '@media screen and (max-width: 530px)': {
          fontSize: '8px !important',
        },
      },
      md: {
        fontSize: '$md',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',

        '@media screen and (max-width: 530px)': {
          fontSize: '12px !important',
        },
      },
      lg: {
        fontSize: '$lg',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',

        '@media screen and (max-width: 530px)': {
          fontSize: '12px !important',
        },
      },
    },
  },
});
