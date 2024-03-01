import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';
import { useRouter } from 'next/router';

const useGetGoogleToken = (code: string | null = '') => {
  const router = useRouter();
  const { data } = useBaseQuery<{
    accessToken: string;
    refreshToken: string;
    googleEmail: string;
  }>(queryKeys.GOOGLE(), `/users/google-login?code=${code}`, true);

  if (data?.data?.accessToken === undefined) {
    void router.push(`/mypage/profile?googleEmail=${data?.data?.googleEmail}`);
  }
  if (data?.data) {
    localStorage.setItem('accessToken', data.data.accessToken);
    localStorage.setItem('refreshToken', data.data.refreshToken);
    void router.push('/home');
  }
};

export default useGetGoogleToken;
