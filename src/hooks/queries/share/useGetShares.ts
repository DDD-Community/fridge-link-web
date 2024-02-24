import type { ShareSortType, ShareStatusType } from '@/types/friendship';

import type { ShareData } from '@/types/share';
import { queryKeys } from '../queryKeys';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

const useGetShares = ({
  sort,
  status,
}: {
  sort: ShareSortType;
  status: ShareStatusType;
}) =>
  useBaseInfiniteQuery<ShareData[]>({
    queryKey: queryKeys.SHARES(sort, status),
    url: '/shares',
    params: { sort, status },
  });

export default useGetShares;
