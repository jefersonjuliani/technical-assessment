import { styled } from '@theme/index';

export const Input = styled('input', {
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  minHeight: '$9',
  borderRadius: 8,
  lineHeight: '$base',
  fontFamily: '$muliBold',
  p: '$3',

  backgroundColor: '$blue12',

  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
});
