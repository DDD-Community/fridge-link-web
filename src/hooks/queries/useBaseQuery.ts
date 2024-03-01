import axiosInstance from '@/api/axiosInstance';
import { useSuspenseQuery } from '@tanstack/react-query';

export const fetchData = async <T>(url: string, isNotCatch: boolean) => {
  try {
    const response = await axiosInstance.get<{ data: T; status?: number }>(url);
    return response.data;
  } catch (error: any) {
    if (!isNotCatch) {
      if (error.response && error.response.status === 404) {
        return await Promise.resolve({ data: null });
      } else {
        console.error(error);
      }
    }
  }
};

export const useBaseQuery = <T>(queryKey: any, url: string, isNotCatch: boolean = false) => {
  return useSuspenseQuery({
    queryKey,
    queryFn: async () => {
      return await fetchData<T>(url, isNotCatch);
    },
  });
};
