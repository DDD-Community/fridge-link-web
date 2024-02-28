import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

interface PostFridgeBodyType {
  name: string;
}

const usePostFridge = () => {
  const onSuccess = (data: PostFridgeBodyType) => {
    void queryClient.invalidateQueries();
  };
  return useBaseMutation<PostFridgeBodyType>(queryKeys.INGREDIENT_LIST, `/refrigs`, onSuccess);
};

export default usePostFridge;
