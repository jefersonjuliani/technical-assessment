import { Box } from '@components/atoms/containers/box';
import { Card } from '@components/atoms/containers/card';
import { Container } from '@components/atoms/containers/container';
import { Flex } from '@components/atoms/containers/flex';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const CardContainer = observer(
  ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <Flex
      size="fullView"
      direction="column"
      align="center"
      justify="center"
    >
      <Container size={2}>
        <Card bg="blue">
          <Box py="lg">
            <Flex
              direction="column"
              align="center"
              justify="center"
            >
              {children}
            </Flex>
          </Box>
        </Card>
      </Container>
    </Flex>
  ),
);
