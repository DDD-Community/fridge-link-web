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
  fn?: () => void,
) => {
  const onSuccess = () => {
    void queryClient.invalidateQueries();
    if (fn) fn();
  };
  return useBaseMutation<FridgeBodyType>(
    [
      ...queryKeys.MY_FRIDGE_CONTENT(fridgeId, location),
      ...queryKeys.MY_INGREDIENT_ID(id),
    ],
    `/ingrs/detail/${id}`,
    onSuccess,
    'PUT',
  );
};
export default usePutIngredientById;
