import type { ProfileEnum } from '@/types/common';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

interface ResType {
  nickname: string;
  kakaoId: number;
  kakaoEmail: string;
  googleEmail: string | null;
  profileImage: ProfileEnum;
}

const useGetMe = () => {
  const { data } = useBaseQuery<ResType>(queryKeys.ME(), `/users/me`, true);
  if (!data?.data)
    return {
      nickname: '',
      kakaoId: 0,
      kakaoEmail: '',
      googleEmail: null,
      profileImage: 'BLUE' as ProfileEnum,
    };
  return data?.data;
};

export default useGetMe;
