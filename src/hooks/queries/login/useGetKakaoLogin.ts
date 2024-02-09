import type { LoginResType } from '@/types/login';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetIngredientList = (code: string) => {
  const { data } = useBaseQuery<LoginResType>(
    queryKeys.KAKAO(),
    `/users/kakao-login?code=${code}`,
  );
  if (data) {
    localStorage.setItem('token', data.accessToken);
  }
};

export default useGetIngredientList;
