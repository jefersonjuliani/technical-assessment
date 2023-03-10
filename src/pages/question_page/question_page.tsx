import { Title } from '@components/atoms/typography/title';
import { CardContainer } from '@components/molecules/card_container';
import { ShareContent } from '@components/molecules/share_content';
import { ChoicesView } from '@components/organisms/choices_view';

import { useMutationQuestion } from '@hooks/mutations_hooks/use_mutation_question_update';
import { useMutationShare } from '@hooks/mutations_hooks/use_share';
import { useQueryQuestion } from '@hooks/queries_hooks/use_query_question';
import { useRootStore } from '@hooks/use_root_store';
import { ChoiceModelInstance } from '@models/choice_model';
import { QuestionModelInstance } from '@models/question_model';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router-dom';

export const QuestionPage = observer((): React.ReactElement => {
  const { id } = useParams();

  useQueryQuestion(id as string);

  const data = useRootStore();

  const question = data.questionById(Number(id));

  const mutationQuestion = useMutationQuestion();

  const mutationShare = useMutationShare();

  return (
    <CardContainer>
      <Title size="xl">{question?.question}</Title>

      <ChoicesView
        choices={question?.choices as ChoiceModelInstance[]}
        onVote={() => {
          mutationQuestion.mutate(question as QuestionModelInstance);
        }}
      />

      <ShareContent
        onShareContent={(email) =>
          mutationShare.mutate({
            destination_email: email,
            content_url: `http://localhost:5173${question?.resourceUrl}`,
          })
        }
      />
    </CardContainer>
  );
});
