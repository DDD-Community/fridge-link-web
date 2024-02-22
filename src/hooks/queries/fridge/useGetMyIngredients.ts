import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface IngredientType {
  id: number;
  name: string;
  iconImage: string;
}

const useGetMyIngredients = () => {
  const { data } = useBaseQuery<IngredientType>(
    queryKeys.INGREDIENTS(),
    '/refridge/my',
  );

  return data?.data;
};

export default useGetMyIngredients;
