import type { ShareDetailData } from '@/types/share';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

const useGetShareDetail = ({ id }: { id: string | string[] | undefined }) => {
  if (typeof id !== 'string') {
    return null;
  }
  const { data } = useBaseQuery<ShareDetailData>(queryKeys.SHARE_DETAIL(), `/shares/${id}`);

  return data?.data;
};

export default useGetShareDetail;
