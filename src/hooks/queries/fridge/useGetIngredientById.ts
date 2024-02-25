import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

export interface IngredientType {
  ingredientId: 0;
  category: string;
  name: string;
  iconImage: string;
  expirationDays: number;
  location?: 'FREEZING' | 'REFRIGERATION';
  quantity?: number;
  addDate?: string;
  expirationDate?: string;
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
