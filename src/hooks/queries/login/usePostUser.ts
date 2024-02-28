import { useRouter } from 'next/router';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

interface PostUserBodyType {
  nickName: string;
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
      email: string;
      nickName: string;
    };
  }) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    void router.push('/home');
  };
  return useBaseMutation<PostUserBodyType>(queryKeys.KAKAO(), `/users`, onSuccess);
};
export default usePostUser;
