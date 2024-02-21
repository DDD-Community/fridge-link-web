import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface ResType {
  nickName: string;
  kakaoId: number;
  kakaoEmail: string;
  googleEmail: string | null;
  profileImage: string;
}

const useGetMe = () => {
  const { data } = useBaseQuery<ResType>(queryKeys.ME(), `/users/me`, true);
  if (!data?.data)
    return {
      nickName: '',
      kakaoId: '',
      kakaoEmail: '',
      googleEmail: null,
      profileImgage: 'BULE',
    };
  return data?.data;
};

export default useGetMe;
