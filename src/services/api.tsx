import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL:
    'https://private-anon-84a45df7a5-blissrecruitmentapi.apiary-mock.com',
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === 'Network Error') {
      const navigate = useNavigate();

      navigate('/');
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
