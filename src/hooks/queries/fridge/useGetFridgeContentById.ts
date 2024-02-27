import { queryKeys } from '../queryKeys';
import type { LocationEnum } from '@/types/common';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

interface FridgeContentType {
  ingredientDetailId: number;
  iconImage: string;
  name: string;
  quantity: 0;
  location: LocationEnum;
  memo: string;
  addDate: string;
  expirationDate: string;
  isDeleted: true;
}
const useGetFridgeContentById = ({
  sort,
  id,
}: {
  sort: LocationEnum;
  id: number;
}) => {
  const data = useBaseInfiniteQuery<FridgeContentType[]>({
    queryKey: queryKeys.MY_FRIDGE_CONTENT(id, sort),
    url: `/ingrs/detail/refrig/${id}`,
    params: { location: sort },
  });
  return data;
};

export default useGetFridgeContentById;
