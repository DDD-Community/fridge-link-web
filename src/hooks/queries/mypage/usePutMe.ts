import type { ProfileEnum } from '@/types/common';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';
import { queryClient } from '@/pages/_app';
import { useRouter } from 'next/router';

export interface ProfileBodyType {
  nickname: string;
  profileImage: ProfileEnum;
}

const usePutMe = () => {
  const router = useRouter();
  const onSuccess = () => {
    void queryClient.invalidateQueries();
    router.push('/mypage');
  };
  return useBaseMutation<ProfileBodyType>(
    queryKeys.ME(),
    `/users`,
    onSuccess,
    'PUT',
  );
};
export default usePutMe;
