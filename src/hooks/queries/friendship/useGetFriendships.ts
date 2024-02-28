import type { FriendshipData, FriendshipSortType } from '@/types/friendship';

import { queryKeys } from '../queryKeys';
import { useBaseInfiniteQuery } from '../useBaseInfiniteQuery';

const useGetFriendships = ({ sort, size }: { sort: FriendshipSortType; size?: number }) => {
  return useBaseInfiniteQuery<FriendshipData[]>({
    queryKey: queryKeys.FRIENDSHIPS(sort),
    url: '/friendship',
    params: { sort },
    size,
  });
};

export default useGetFriendships;
