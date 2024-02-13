import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetKakaoToken = (code: string | null = '') => {
  const { data } = useBaseQuery<{ data: { accessToken: string } }>(
    queryKeys.KAKAO(),
    `/users/kakao-login?code=${code}`,
  );
  if (data) {
    localStorage.setItem('token', data.data.accessToken);
  }
};

export default useGetKakaoToken;
