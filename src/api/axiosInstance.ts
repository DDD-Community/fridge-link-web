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

export default axiosInstance;
