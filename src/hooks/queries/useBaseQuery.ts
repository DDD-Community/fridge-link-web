import axiosInstance from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export const fetchData = async <T>(url: string) => {
  const response = await axiosInstance.get<{ data: T }>(url);
  return response.data;
};

export const useBaseQuery = <T>(queryKey: any, url: string) => {
  return useQuery({
    queryKey,
    queryFn: async () =>
      await fetchData<T>(url)
        .then((res) => res.data)
        .catch((error) => {
          console.error(error);
        }),
  });
};
