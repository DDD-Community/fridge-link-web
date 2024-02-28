import type { IngredientDetailType } from '@/types/fridge';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetMyIngredientSummary = () => {
  const { data } = useBaseQuery<IngredientDetailType[]>(queryKeys.INGREDIENTS_RECENT(), '/ingrs/detail/recent');

  return data?.data;
};

export default useGetMyIngredientSummary;
