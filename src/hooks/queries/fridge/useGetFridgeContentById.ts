import type { LocationEnum } from '@/types/common';
import { queryKeys } from '../queryKeys';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

export interface FridgeContentType {
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
const useGetFridgeContentById = ({ sort, id }: { sort: LocationEnum; id?: number }) => {
  const data = useBaseInfiniteQuery<FridgeContentType[]>({
    queryKey: queryKeys.MY_FRIDGE_CONTENT(id as number, sort),
    url: `/ingrs/detail/refrig/${id}`,
    params: { location: sort },
    enabled: typeof id === 'number',
  });
  return data;
};

export default useGetFridgeContentById;
