import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';
import { useRouter } from 'next/router';

interface PostUserBodyType {
  nickname: string;
  kakaoId: number;
  kakaoEmail: string;
  googleEmail: string | null;
  profileImage: string;
}

const usePostUser = () => {
  const router = useRouter();
  const onSuccess = ({
    data,
  }: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  }) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    void router.push('/login');
  };
  return useBaseMutation<PostUserBodyType>(queryKeys.KAKAO(), `/users`, onSuccess);
};
export default usePostUser;
