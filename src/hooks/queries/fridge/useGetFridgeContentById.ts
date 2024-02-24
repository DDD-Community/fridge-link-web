import type { IngredientDetailType } from '@/types/fridge';
import { queryKeys } from '../queryKeys';
import { fetchData } from '../useBaseQuery';
import { useQuery } from '@tanstack/react-query';

interface FridgeContentType {
  content: IngredientDetailType[];
}

const useGetFridgeContentById = (id: number) => {
  // 무한스크롤 or useSuspenseQuery로 변경 해야함
  const { data } = useQuery({
    queryKey: queryKeys.MY_FRIDGE_CONTENT(id),
    queryFn: async () => {
      return await fetchData<FridgeContentType>(
        `/ingrs/detail/refrig/${id}`,
        true,
      );
    },
    enabled: id !== 0 && !isNaN(id),
  });

  if (!data?.data) return;

  return data?.data;
};

export default useGetFridgeContentById;
