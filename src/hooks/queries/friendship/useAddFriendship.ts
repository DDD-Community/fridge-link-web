import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useAddFriendship = ({ onSuccess }: { onSuccess: () => void }) => {
  return useBaseMutation<{ inviteCode: string }>(
    queryKeys.ADD_FRIENDSHIP(),
    `/friendship`,
    onSuccess,
  );
};
export default useAddFriendship;
