import { ReactComponent as LoadingSVG } from '@assets/svg/loading.svg';
import { Flex } from '@components/atoms/containers/flex';
import React from 'react';

export const Loading = (): React.ReactElement => (
  <Flex
    size="full"
    align="center"
    justify="center"
  >
    <LoadingSVG />
  </Flex>
);
