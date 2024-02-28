import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

export interface FridgeBodyType {
  name: string;
}

const usePutFridgeById = (id: number) => {
  const onSuccess = () => {
    void queryClient.invalidateQueries();
  };
  return useBaseMutation<FridgeBodyType>(queryKeys.MY_FRIDGE_LIST(), `/refrigs/${id}`, onSuccess, 'PUT');
};
export default usePutFridgeById;
