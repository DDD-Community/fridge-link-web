import type { AddShareReq } from '@/types/share';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';
import { useRouter } from 'next/router';

const usePostShare = () => {
  const router = useRouter();
  const onSuccess = () => {
    router.replace('/share');
  };
  return useBaseMutation<AddShareReq>(queryKeys.ADD_SHARE(), `/shares`, onSuccess);
};
export default usePostShare;
