import { useRootStore } from '@hooks/use_root_store';
import { QuestionModelInstance } from '@models/question_model';
import axiosInstance from '@services/api';
import { useMutation, UseMutationResult } from 'react-query';

const fetchQuestion = async (
  question: QuestionModelInstance,
): Promise<QuestionModelInstance> => {
  const { data } = await axiosInstance.put<QuestionModelInstance>(
    `questions/${question.id}`,
    question,
  );

  return data;
};

export const useMutationQuestion = (): UseMutationResult<
  QuestionModelInstance,
  Error,
  QuestionModelInstance
> => {
  const rootStore = useRootStore();

  return useMutation<QuestionModelInstance, Error, QuestionModelInstance>(
    async (question: QuestionModelInstance) => await fetchQuestion(question),
    {
      onSuccess: (data) => {
        rootStore.processNewQuestion(data);
      },
    },
  );
};
