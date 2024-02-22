import type { FriendshipData, FriendshipSortType } from '@/types/friendship';

import { queryKeys } from '../queryKeys';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

const useGetFriendships = ({ sort }: { sort: FriendshipSortType }) => {
  return useBaseInfiniteQuery<FriendshipData[]>({
    queryKey: queryKeys.FRIENDSHIPS(sort),
    url: '/friendship',
    sort,
  });
};

export default useGetFriendships;
