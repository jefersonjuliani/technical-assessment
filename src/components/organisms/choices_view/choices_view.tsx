import { Box } from '@components/atoms/containers/box';
import { Card } from '@components/atoms/containers/card';
import { Flex } from '@components/atoms/containers/flex';
import { Button } from '@components/atoms/forms/button';
import { Text } from '@components/atoms/typography/text';
import { Loading } from '@components/molecules/loading';
import { ChoiceModelInstance } from '@models/choice_model';
import { observer } from 'mobx-react-lite';
import React from 'react';

const votePlusOne = 1;

export const ChoicesView = observer(
  ({
    choices,
    onVote,
  }: {
    choices: ChoiceModelInstance[];
    onVote: () => void;
  }): React.ReactElement => {
    if (!choices) {
      return <Loading />;
    }

    return (
      <Box
        width="full"
        px="lg"
        my="md"
        overflow="auto"
        height="lg"
      >
        {choices.map((item, index) => (
          <Box
            py="sm"
            key={`${item.choice}-${index}`}
          >
            <Card bg="blueLight">
              <Flex
                size="full"
                direction="row"
                align="center"
                justify="between"
                gap={8}
                py="sm"
              >
                <Box px="sm">
                  <Text>{`Votes:${item.votes}`}</Text>
                </Box>

                <Box>
                  <Text>{item.choice}</Text>
                </Box>

                <Box px="sm">
                  <Button
                    size="sm"
                    color="blue2"
                    variant="outiline"
                    onClick={() => {
                      item.updateVotes(item.votes + votePlusOne);

                      onVote();
                    }}
                  >
                    Vote
                  </Button>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </Box>
    );
  },
);
