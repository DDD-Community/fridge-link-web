import axiosInstance from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const fetchData = async <T>(url: string, body: T) => {
  const response = await axiosInstance.post<{ data: T }>(url, body);
  return response.data;
};

export const useBaseMutation = <T>(
  mutationKey: any,
  url: string,
  onSuccess: (any: any) => void,
) => {
  return useMutation({
    mutationKey,
    mutationFn: async (body: T) => {
      const response = await fetchData<T>(url, body);

      onSuccess(response.data);
    },
  });
};
