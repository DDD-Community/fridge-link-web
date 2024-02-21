import axiosInstance from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

export const fetchData = async <T>(url: string, body: T, method: string) => {
  const response = await axiosInstance.request({
    method,
    url,
    data: body,
  });

  return response.data;
};

export const useBaseMutation = <T>(
  mutationKey: any,
  url: string,
  onSuccess: (any: any) => void,
  method: 'POST' | 'PUT' | 'DELETE' = 'POST',
) => {
  return useMutation({
    mutationKey,
    mutationFn: async (body: T) => {
      const response = await fetchData<T>(url, body, method);

      onSuccess(response.data);
    },
  });
};
