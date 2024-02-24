import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetCount = () => {
  const { data } = useBaseQuery<{
    ingredientCount: number;
    shareCount: number;
    friendCount: number;
  }>(queryKeys.COUNT(), `/users/me/statistics`, true);

  return data?.data;
};

export default useGetCount;
