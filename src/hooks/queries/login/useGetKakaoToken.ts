import { useRouter } from 'next/router';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetKakaoToken = (code: string | null = '') => {
  const router = useRouter();
  const { data } = useBaseQuery<{
    accessToken: string;
    refreshToken: string;
    kakaoId: number;
    kakaoEmail: string;
    profileImage?: string;
  }>(queryKeys.KAKAO(), `/users/kakao-login?code=${code}`);

  if (data?.profileImage === undefined) {
    void router.push(
      `/mypage/profile?kakaoId=${data?.kakaoId}&kakaoEmail=${data?.kakaoEmail}`,
    );
  }

  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
};

export default useGetKakaoToken;
