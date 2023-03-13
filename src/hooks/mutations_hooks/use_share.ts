import axiosInstance from '@services/api';
import { useMutation, UseMutationResult } from 'react-query';

interface ShareData {
  status: string;
}

const execute = async (
  destination_email: string,
  content_url: string,
): Promise<ShareData> => {
  const { data } = await axiosInstance.post<ShareData>(
    `share?destination_email=${destination_email}&content_url=${content_url}`,
  );

  return data;
};

export const useMutationShare = (): UseMutationResult<
  ShareData,
  Error,
  { destination_email: string; content_url: string }
> =>
  useMutation<
    ShareData,
    Error,
    { destination_email: string; content_url: string }
  >(
    async ({ destination_email, content_url }) =>
      await execute(destination_email, content_url),
    {
      onSuccess: () => {
        alert('Enviado');
      },
    },
  );
