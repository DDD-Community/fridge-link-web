import axiosInstance from '@/api/axiosInstance';
import type { IngredientType } from '@/types/fridge';
import { useQuery } from '@tanstack/react-query';
import useToast from '../../useToast';
import { queryKeys } from '../queryKeys';

interface IngredientListResponse {
  data: IngredientType[];
}

export const fetchIngredientList = async (): Promise<IngredientListResponse> =>
  await axiosInstance.get(`/ingrs`);

export const useGetIngredientList: () => any = () => {
  const { showToast } = useToast();
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.INGREDIENT(),
    queryFn: async () =>
      await fetchIngredientList()
        .then((res) => res.data)
        .catch(() => {
          showToast('식자재 불러오기에 실패했습니다.', 'success');
        }),
  });

  return { data, isLoading };
};
