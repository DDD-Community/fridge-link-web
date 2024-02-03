import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

const getKaKaoToken: () => any = async () => {
  const response = await axiosInstance.get<{
    data: { email: string };
  }>('/users/kakao-login');
  return response.data;
};

export const useGetKakaoToken: () => void = () => {
  return useQuery({
    queryKey: ['login', 'kakao'],
    queryFn: getKaKaoToken,
  });
};

const getGoogleToken: () => any = async () => {
  const response = await axiosInstance.get<{
    data: { email: string };
  }>('/users/google-login');
  return response.data;
};

export const useGetGoogleToken: () => void = () => {
  return useQuery({
    queryKey: ['login', 'google'],
    queryFn: getGoogleToken,
  });
};
