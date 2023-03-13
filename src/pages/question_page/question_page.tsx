import { Title } from '@components/atoms/typography/title';
import { CardContainer } from '@components/molecules/card_container';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const QuestionPage = observer(
  (): React.ReactElement => (
    <CardContainer>
      <Title size="xl">Question</Title>
    </CardContainer>
  ),
);
