import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://private-anon-84a45df7a5-blissrecruitmentapi.apiary-mock.com',
  timeout: 10000,
});

export default axiosInstance;
