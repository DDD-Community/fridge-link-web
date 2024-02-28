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
      originalRequest._retry = true;

      const refreshToken =
        typeof window !== 'undefined'
          ? localStorage.getItem('refreshToken')
          : null;

      try {
        originalRequest.headers['Refresh-Token'] = refreshToken;
        const res = await axiosInstance(originalRequest);
        const newAccessToken = res.headers['new-access-token'];
        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);
        }

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return await axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        throw refreshError;
      }

      // window.location.href = '/login';
    }

    return await Promise.reject(error);
  },
);

export default axiosInstance;
