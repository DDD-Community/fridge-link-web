import type { ShareSortType, ShareStatusType } from '@/types/friendship';

import type { ShareData } from '@/types/share';
import { queryKeys } from '../queryKeys';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

const useGetMyShares = ({
  sort,
  status,
}: {
  sort: ShareSortType;
  status: ShareStatusType;
}) =>
  useBaseInfiniteQuery<ShareData[]>({
    queryKey: queryKeys.MY_SHARES(sort, status),
    url: `/shares/created`,
    params: { status },
  });

export default useGetMyShares;
