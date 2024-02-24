import { type ShareStatusType, type ShareSortType } from '@/types/friendship';
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
