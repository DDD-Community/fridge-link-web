import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetMyIngredientsCount = () => {
  const { data } = useBaseQuery<number>(queryKeys.MY_INGREDIENTS_COUNT(), `/ingrs/detail/count?day=7`, true);

  return data?.data;
};

export default useGetMyIngredientsCount;
