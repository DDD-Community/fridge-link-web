import type { ShareStatusType } from '@/types/friendship';
import { queryClient } from '@/pages/_app';
import { queryKeys } from '../queryKeys';
import { useBaseMutation } from '../useBaseMutation';

const usePutShareStatus = ({
  id,
  status,
  onSuccessParam,
}: {
  id: number;
  status: ShareStatusType;
  onSuccessParam: () => void;
}) => {
  const onSuccess = () => {
    onSuccessParam();
    void queryClient.invalidateQueries();
  };
  return useBaseMutation(
    queryKeys.MODIFY_SHARE_STATUS(),
    `/shares/${id}/status?updateShareStatusRequest=${status}`,
    onSuccess,
    'PUT',
  );
};
export default usePutShareStatus;
