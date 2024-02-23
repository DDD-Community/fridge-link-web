import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useDeleteFriendship = ({ onSuccess }: { onSuccess: () => void }) => {
  return useBaseMutation<Array<{ friendId: number }>>(
    queryKeys.DELETE_FRIENDSHIP(),
    `/friendship/delete`,
    onSuccess,
  );
};
export default useDeleteFriendship;
