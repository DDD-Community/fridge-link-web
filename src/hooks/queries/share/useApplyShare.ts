import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const useApplyShare = ({ onSuccess }: { onSuccess: () => void }) => {
  return useBaseMutation<{ shareId: number }>(queryKeys.APPLY_SHARE(), `/shares/applies`, onSuccess);
};
export default useApplyShare;
