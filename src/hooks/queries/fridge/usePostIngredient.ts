import { useRouter } from 'next/router';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

export interface PostIngredientBodyType {
  refrigeratorId: number;
  ingredientId: number;
  name: string;
  quantity: number;
  location: 'FREEZING' | 'REFRIGERATION';
  memo: string;
  addDate: Date;
  expirationDate: Date;
  isDeleted: boolean;
}

const usePostIngredient = (fn: () => void, fridgeid: string, name: string) => {
  const router = useRouter();
  const onSuccess = () => {
    fn();
    void router.push(`/fridge?fridgeid=${fridgeid}&name=${name}`);
  };
  return useBaseMutation<PostIngredientBodyType>(
    queryKeys.INGREDIENTS(),
    `/ingrs/detail`,
    onSuccess,
  );
};
export default usePostIngredient;
