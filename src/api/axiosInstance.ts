import axios from 'axios';

export interface ApiResponseDTO<T> {
  data: T;
  status: number;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URI,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
