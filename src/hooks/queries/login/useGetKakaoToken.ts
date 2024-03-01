import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';
import { useRouter } from 'next/router';

const useGetKakaoToken = (code: string | null = '') => {
  const router = useRouter();
  const status = window.location.href.split('//')[1].split('/')[0] === 'localhost:3000' ? 'dev' : 'prod';
  const { data } = useBaseQuery<{
    accessToken: string;
    refreshToken: string;
    kakaoId: number;
    kakaoEmail: string;
  }>(queryKeys.KAKAO(), `/users/kakao-login?code=${code}&status=${status}`, true);

  if (data?.data?.accessToken === undefined) {
    void router.push(`/mypage/profile?kakaoId=${data?.data?.kakaoId}&kakaoEmail=${data?.data?.kakaoEmail}`);
  }
  if (data?.data) {
    localStorage.setItem('accessToken', data.data.accessToken);
    localStorage.setItem('refreshToken', data.data.refreshToken);
    void router.push('/home');
  }
};

export default useGetKakaoToken;
