import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface ResType {
  nickName: string;
  kakaoId: number;
  kakaoEmail: string;
  googleEmail: string;
  profileImage: string;
}

const useGetMe = () => {
  const { data } = useBaseQuery<ResType>(queryKeys.ME(), `/users/me`, true);
  return data?.data ?? null;
};

export default useGetMe;
