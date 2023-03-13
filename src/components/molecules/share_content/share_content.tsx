import { Box } from '@components/atoms/containers/box';
import { Flex } from '@components/atoms/containers/flex';
import { Button } from '@components/atoms/forms/button';
import { Input } from '@components/atoms/forms/input';
import { observer } from 'mobx-react-lite';
import React from 'react';
import validator from 'validator';

export const ShareContent = observer(
  ({
    onShareContent,
  }: {
    onShareContent: (email: string) => void;
  }): React.ReactElement => {
    const [email, setEmail] = React.useState('');

    const [isValidEmail, setIsValidEmail] = React.useState(true);

    return (
      <Flex
        size="full"
        direction="row"
        align="center"
        justify="center"
        mx="md"
        my="md"
      >
        <Box
          mx="md"
          flex="3"
        >
          <Input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);

              setIsValidEmail(validator.isEmail(event.currentTarget.value));
            }}
          />
        </Box>

        <Box
          flex="1"
          mx="md"
        >
          <Button
            size="md"
            color="blue"
            onClick={() => {
              if (isValidEmail) {
                onShareContent(email);
              }
            }}
            disabled={!isValidEmail}
          >
            Share link
          </Button>
        </Box>
      </Flex>
    );
  },
);
