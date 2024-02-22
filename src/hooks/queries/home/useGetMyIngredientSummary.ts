import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface IngredientType {
  id: number;
  name: string;
  iconImage: string;
}

const useGetMyIngredientSummary = () => {
  const { data } = useBaseQuery<IngredientType[]>(
    queryKeys.INGREDIENTS_RECENT(),
    '/ingrs/detail/recent',
  );

  return data?.data;
};

export default useGetMyIngredientSummary;
