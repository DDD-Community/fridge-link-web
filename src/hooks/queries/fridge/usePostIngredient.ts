import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';
import { useRouter } from 'next/router';

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
    void router.push(`/fridge?fridgeid=${fridgeid}&name=${name}`);
    fn();
  };
  return useBaseMutation<PostIngredientBodyType>(queryKeys.INGREDIENTS(), `/ingrs/detail`, onSuccess);
};
export default usePostIngredient;
