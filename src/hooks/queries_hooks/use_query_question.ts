import { useRootStore } from '@hooks/use_root_store';
import { QuestionModelInstance } from '@models/question_model';
import axiosInstance from '@services/api';
import { useQuery, UseQueryResult } from 'react-query';

const execute = async (question_id: string): Promise<QuestionModelInstance> => {
  const { data } = await axiosInstance.get<QuestionModelInstance>(
    `questions/${question_id}`,
  );

  return data;
};

export const useQueryQuestion = (
  question_id: string,
): UseQueryResult<QuestionModelInstance, unknown> => {
  const rootStore = useRootStore();

  return useQuery<QuestionModelInstance, unknown>(
    ['question', question_id],
    async () => await execute(question_id),
    {
      onSuccess: (data) => {
        rootStore.processNewQuestion(data);
      },
    },
  );
};
