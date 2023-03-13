import { styled } from '@theme/index';

export const Card = styled('div', {
  minHeight: '$14',
  width: '100%',
  height: '100%',
  borderRadius: '$sm',

  variants: {
    bg: {
      blue: {
        backgroundColor: '$blue1',
      },
      blueLight: {
        backgroundColor: '$blue3',
      },
    },
  },
});
