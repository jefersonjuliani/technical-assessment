import { Flex } from '@components/atoms/containers/flex';
import { Button } from '@components/atoms/forms/button';
import { Text } from '@components/atoms/typography/text';
import React from 'react';
import { useQueryClient } from 'react-query';

export const RetryPage = (): React.ReactElement => {
  const queryClient = useQueryClient();

  return (
    <Flex
      size="full"
      direction="column"
      align="center"
      justify="center"
    >
      <Flex
        direction="column"
        gap={9}
      >
        <Text size="lg">Error retrieving health status</Text>

        <Button
          color="blue"
          size="lg"
          onClick={() => queryClient.invalidateQueries('health')}
        >
          Retry the connection ...
        </Button>
      </Flex>
    </Flex>
  );
};
