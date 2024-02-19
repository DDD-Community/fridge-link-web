import { useRouter } from 'next/router';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

interface PostIngredientBodyType {
  name: string;
}

const usePostIngredient = () => {
  const router = useRouter();
  const onSuccess = () => {
    void router.push('/fridge');
  };
  return useBaseMutation<PostIngredientBodyType>(
    queryKeys.INGREDIENTS(),
    `/ingrs`,
    onSuccess,
  );
};
export default usePostIngredient;
