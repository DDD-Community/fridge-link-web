import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

interface PostUserBodyType {
  nickName: string;
  kakaoId: number;
  kakaoEmail: string;
  googleEmail: string;
  profileImage: string;
}

const usePostUser = () => {
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
    console.log(data);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  };
  return useBaseMutation<PostUserBodyType>(
    queryKeys.KAKAO(),
    `/users`,
    onSuccess,
  );
};
export default usePostUser;
