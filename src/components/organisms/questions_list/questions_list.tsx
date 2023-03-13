import { Box } from '@components/atoms/containers/box';
import { Card } from '@components/atoms/containers/card';
import { Flex } from '@components/atoms/containers/flex';
import { Button } from '@components/atoms/forms/button';
import { Text } from '@components/atoms/typography/text';
import { QuestionModelInstance } from '@models/question_model';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const QuestionsList = observer(
  ({
    questions,
  }: {
    questions: QuestionModelInstance[];
  }): React.ReactElement => {
    const navigate = useNavigate();

    return (
      <Box
        width="full"
        px="lg"
        my="md"
        overflow="auto"
        height="lg"
      >
        {questions.map((item) => (
          <Box
            py="sm"
            key={item.id}
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
                  <Text>{`#${item.id}`}</Text>
                </Box>

                <Box>
                  <Text>{item.question}</Text>
                </Box>

                <Box px="sm">
                  <Button
                    size="sm"
                    color="blue2"
                    variant="outiline"
                    onClick={() => navigate(item.resourceUrl)}
                  >
                    Detail Screen
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
