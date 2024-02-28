import type { IngredientType } from './useGetIngredientById';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetMyIngredient = (id: number) => {
  const { data } = useBaseQuery<IngredientType>(queryKeys.MY_INGREDIENT_ID(id), `/ingrs/detail/${id}`);

  return data?.data;
};

export default useGetMyIngredient;
