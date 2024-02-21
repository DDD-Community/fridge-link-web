import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface FridgeContentType {
  content: [];
}

const useGetFridgeContentById = (id: string) => {
  const { data } = useBaseQuery<FridgeContentType>(
    queryKeys.MY_FRIDGE_CONTENT(id),
    `/ingrs/detail/refrig/${id}`,
  );

  if (!data?.data) return;

  return data?.data;
};

export default useGetFridgeContentById;
