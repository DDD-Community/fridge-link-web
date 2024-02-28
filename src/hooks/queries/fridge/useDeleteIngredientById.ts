import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useDeleteIngredientById = (id: number, fridgeId: number, location: string, fn?: () => void) => {
  const onSuccess = () => {
    void queryClient.invalidateQueries();
    if (fn) fn();
  };
  return useBaseMutation(queryKeys.MY_FRIDGE_CONTENT(fridgeId, location), `/ingrs/detail/${id}`, onSuccess, 'DELETE');
};

export default useDeleteIngredientById;
