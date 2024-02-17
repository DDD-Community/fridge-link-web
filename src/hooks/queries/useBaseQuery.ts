import axiosInstance from '@/api/axiosInstance';
import { useSuspenseQuery } from '@tanstack/react-query';

export const fetchData = async <T>(url: string) => {
  const response = await axiosInstance.get<{ data: T; status?: number }>(url);
  return response.data;
};

export const useBaseQuery = <T>(queryKey: any, url: string) => {
  return useSuspenseQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetchData<T>(url);
      if (response.status === 404) {
        return [];
      }
    },
  });
};
