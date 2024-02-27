import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

export interface PostNewIngredientBodyType {
  category: string;
  name: string;
  iconImage: string;
  expirationDays: number;
}

const usePostNewIngredient = () => {
  return useBaseMutation<PostNewIngredientBodyType>(
    queryKeys.INGREDIENTS(),
    `/ingrs`,
  );
};
export default usePostNewIngredient;
