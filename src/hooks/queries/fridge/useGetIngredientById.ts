import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface IngredientType {
  ingredientId: 0;
  category: string;
  name: string;
  iconImage: string;
  expirationDays: 0;
}

const useGetIngredientById = (id: number) => {
  const { data } = useBaseQuery<IngredientType>(
    queryKeys.INGREDIENT_ID(id),
    `/ingrs/${id}`,
  );

  if (!data?.data) return;

  return data?.data;
};

export default useGetIngredientById;
