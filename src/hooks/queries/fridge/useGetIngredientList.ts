import type { IngredientType } from '@/types/fridge';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetIngredientList = () => {
  // const testApiEndpoint = 'https://jsonplaceholder.typicode.com/todos';

  return useBaseQuery<IngredientType>(queryKeys.INGREDIENT(), '/ingrs');
};

export default useGetIngredientList;
