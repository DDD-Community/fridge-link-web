import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetMyInviteCode = () => {
  const { data } = useBaseQuery<{ inviteCode: string }>(
    queryKeys.MY_INVITE_CODE(),
    '/users/me/invite-code',
  );

  if (!data?.data) {
    return { inviteCode: '-' };
  }

  return data?.data;
};

export default useGetMyInviteCode;
