import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useDeleteApplyShare = ({ id, onSuccess }: { id: number; onSuccess: () => void }) => {
  return useBaseMutation(queryKeys.DELETE_APPLY_SHARE(), `/shares/applies/${id}`, onSuccess, 'DELETE');
};
export default useDeleteApplyShare;
