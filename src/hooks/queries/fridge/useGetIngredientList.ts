import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface IngredientType {
  id: number;
  name: string;
  iconImage: string;
}

const useGetIngredientList = () => {
  const { data } = useBaseQuery<Array<{ category: string; ingredientGroupList: IngredientType[] }>>(
    queryKeys.INGREDIENT_LIST(),
    '/ingrs/category',
  );

  return data?.data;
};

export default useGetIngredientList;
