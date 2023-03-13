import { useRootStore } from '@hooks/use_root_store';
import { QuestionModelInstance } from '@models/question_model';
import axiosInstance from '@services/api';
import { useQuery, UseQueryResult } from 'react-query';

const initialOffset = 0;

const fetchQuestions = async (
  limit: number,
  offset: number,
  filter: string,
): Promise<QuestionModelInstance[]> => {
  const { data } = await axiosInstance.get<QuestionModelInstance[]>(
    'questions',
    {
      params: {
        limit,
        offset,
        filter,
      },
    },
  );

  return data;
};

export const useQueryQuestions = (
  limit: number,
  offset: number,
  filter: string,
): UseQueryResult<QuestionModelInstance[], unknown> => {
  const rootStore = useRootStore();

  return useQuery<QuestionModelInstance[], unknown>(
    ['questions', limit, offset, filter],
    async () => await fetchQuestions(limit, offset, filter),
    {
      onSuccess: (data) => {
        if (offset === initialOffset) {
          rootStore.processQuestions(data);
        } else {
          rootStore.processNewQuestions(data);
        }
      },
    },
  );
};
