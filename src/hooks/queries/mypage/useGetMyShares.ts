import type { MySharesSortType } from '@/types/mypage';
import type { ShareData } from '@/types/share';
import type { ShareStatusType } from '@/types/friendship';
import { queryKeys } from '../queryKeys';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

const useGetMyShares = ({ sort, status }: { sort: MySharesSortType; status: ShareStatusType }) =>
  useBaseInfiniteQuery<ShareData[]>({
    queryKey: queryKeys.MY_SHARES(sort, status),
    url: `/users/me/shares/${sort}`,
    params: { status, sort: 'string' },
  });

export default useGetMyShares;
