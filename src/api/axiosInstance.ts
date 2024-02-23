import axios from 'axios';

export interface ApiResponseDTO<T> {
  data: T;
  status: number;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URI,
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';

  if (typeof window !== 'undefined') {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      /*
      originalRequest._retry = true;

      const refreshToken =
        typeof window !== 'undefined'
          ? localStorage.getItem('refreshToken')
          : null;

      try {
        const refreshResponse = await axios.post('/users/kakao-login', {
          refreshToken,
        });

        if (typeof window !== 'undefined') {
          localStorage.setItem('accessToken', refreshResponse.data.accessToken);
        }

        originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
        return await axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        throw refreshError;
      }
     */
      window.location.href = '/login';
    }

    return await Promise.reject(error);
  },
);

export default axiosInstance;
