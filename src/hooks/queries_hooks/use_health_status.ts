import axiosInstance from '@services/api';
import { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface HealthStatus {
  status: string;
}

const fetchHealthStatus = async (): Promise<
  AxiosResponse<HealthStatus>['data']
> => {
  const { data } = await axiosInstance.get<HealthStatus>('/health');

  return data;
};

export const useHealthStatus = (): UseQueryResult<HealthStatus, unknown> =>
  useQuery<HealthStatus, unknown>('health', fetchHealthStatus);
