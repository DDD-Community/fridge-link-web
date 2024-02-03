import axiosInstance from '@/api/axiosInstance';
import type { IngredientType } from '@/types/fridge';
import { useQuery } from '@tanstack/react-query';

interface IngredientListResponse {
  data: IngredientType[];
}

export const fetchIngredientList = async (): Promise<IngredientListResponse> =>
  await axiosInstance.get(`/ingrs`);

export const useGetIngredientList: () => void = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['ingredientList'],
    queryFn: async () => await fetchIngredientList().then((res) => res.data),
  });

  return { data, isLoading };
};
