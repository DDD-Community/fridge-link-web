import type { LocationEnum } from '@/types/common';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';
import { queryClient } from '@/pages/_app';

export interface FridgeBodyType {
  name: string;
  quantity: number;
  location: LocationEnum;
  memo: string;
  addDate: Date;
  expirationDate: Date;
  isDeleted: boolean;
}

const usePutIngredientById = (
  id: number,
  fridgeId: number,
  location: string,
) => {
  const onSuccess = () => {
    void queryClient.invalidateQueries();
  };
  return useBaseMutation<FridgeBodyType>(
    queryKeys.MY_FRIDGE_CONTENT(fridgeId, location),
    `/ingrs/detail/${id}`,
    onSuccess,
    'PUT',
  );
};
export default usePutIngredientById;
