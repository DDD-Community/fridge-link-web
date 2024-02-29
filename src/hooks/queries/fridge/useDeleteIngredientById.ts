import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useDeleteIngredientById = (id: number, fridgeId: number, location: string, fn?: () => void) => {
  const onSuccess = () => {
    if (fn) fn();
    void queryClient.resetQueries({ queryKey: queryKeys.MY_FRIDGE_CONTENT(fridgeId, location), exact: true });
  };
  return useBaseMutation(queryKeys.MY_FRIDGE_CONTENT(fridgeId, location), `/ingrs/detail/${id}`, onSuccess, 'DELETE');
};

export default useDeleteIngredientById;
