import { styled } from '@theme/index';

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  px: '$3dot5',
  py: '$1dot5',
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
    color: {
      blue: {
        backgroundColor: '$blue10',
        color: 'white',
        borderColor: '$blue7',
        '&:hover': {
          backgroundColor: '$blue11',
          borderColor: '$blue8',
        },
      },
    },
    size: {
      sm: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      lg: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
  },
});
