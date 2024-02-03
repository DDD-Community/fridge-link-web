import axios from 'axios';

export interface ApiResponseDTO<T> {
  data: T;
  status: number;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAccessTokenLocalStorage: () => string = () => {
  const accessToken = localStorage.getItem('token');

  return accessToken ? `Bearer ${accessToken}` : '';
};

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAccessTokenLocalStorage()}`;

  return config;
});

export default axiosInstance;
