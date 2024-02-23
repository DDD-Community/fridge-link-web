import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface IngredientType {
  id: number;
  name: string;
}

const useGetMyFridgeList = (id?: number) => {
  const { data } = useBaseQuery<IngredientType[]>(
    queryKeys.INGREDIENTS(),
    `/refrigs/${id ? `users/${id}` : 'my'}`,
  );

  return data?.data;
};

export default useGetMyFridgeList;
