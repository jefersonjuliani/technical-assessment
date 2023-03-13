import { Box } from '@components/atoms/containers/box';
import { Flex } from '@components/atoms/containers/flex';
import { Button } from '@components/atoms/forms/button';
import { Title } from '@components/atoms/typography/title';
import { CardContainer } from '@components/molecules/card_container';
import { SearchFilter } from '@components/molecules/search_filter';
import { QuestionsList } from '@components/organisms/questions_list';
import { useQueryQuestions } from '@hooks/queries_hooks/use_query_questions';
import { useQuestionsStore } from '@hooks/use_questions_store';
import { observer } from 'mobx-react-lite';
import React from 'react';

const limitOfRecordsToRetrieve = 10;

const initialOffset = 0;

export const QuestionsPage = observer((): React.ReactElement => {
  const [offset, setOffset] = React.useState(initialOffset);

  const [filter, setFilter] = React.useState('');

  useQueryQuestions(limitOfRecordsToRetrieve, offset, filter);

  const data = useQuestionsStore();

  return (
    <CardContainer>
      <Title size="xl">Questions</Title>

      <SearchFilter
        onChange={(value) => {
          setFilter(value);
        }}
      />

      <QuestionsList questions={data} />

      <Box my="lg">
        <Flex
          direction="column"
          align="center"
          justify="center"
        >
          <Button
            size="md"
            color="blue"
            onClick={() => {
              setOffset((old) => old + limitOfRecordsToRetrieve);
            }}
          >
            Load more
          </Button>
        </Flex>
      </Box>
    </CardContainer>
  );
});
