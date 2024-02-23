import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useDeleteFridgeById = (id: number) => {
  const onSuccess = () => {
    void queryClient.invalidateQueries();
  };
  return useBaseMutation(
    queryKeys.INGREDIENT_LIST,
    `/refrigs/${id}`,
    onSuccess,
    'DELETE',
  );
};

export default useDeleteFridgeById;
