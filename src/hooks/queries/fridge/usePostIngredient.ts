import { useRouter } from 'next/router';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

export interface PostIngredientBodyType {
  refrigeratorId: number;
  ingredientId: number;
  name: string;
  quantity: number;
  location: 'FREEZING';
  memo: string;
  addDate: string;
  expirationDate: string;
  isDeleted: true;
}

const usePostIngredient = (fn?: () => void) => {
  const router = useRouter();
  const onSuccess = () => {
    void router.push('/fridge');
  };
  return useBaseMutation<PostIngredientBodyType>(
    queryKeys.INGREDIENTS(),
    `/ingrs/detail`,
    onSuccess,
  );
};
export default usePostIngredient;
