import type { LocationEnum } from '@/types/common';
import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

export interface FridgeBodyType {
  name: string;
  quantity: number;
  location: LocationEnum;
  memo: string;
  addDate: Date;
  expirationDate: Date;
  isDeleted: boolean;
}

const usePutIngredientById = (id: number, fridgeId: number, location: string, fn?: () => void) => {
  const onSuccess = () => {
    if (fn) fn();
    void queryClient.invalidateQueries();
  };
  return useBaseMutation<FridgeBodyType>(
    [...queryKeys.MY_FRIDGE_CONTENT(fridgeId, location), ...queryKeys.MY_INGREDIENT_ID(id)],
    `/ingrs/detail/${id}`,
    onSuccess,
    'PUT',
  );
};
export default usePutIngredientById;
