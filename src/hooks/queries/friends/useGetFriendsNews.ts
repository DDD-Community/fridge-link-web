import type { IngredientType } from '@/types/common';
import { queryKeys } from '../queryKeys';
import { useBaseQuery } from '../useBaseQuery';

export interface FriendObjectType {
  userId: number;
  nickname: string;
  refrigeratorId: number;
  friendRefrigeratorIngredientGroupList: IngredientType[];
}

const useGetFriendsNews = () => {
  const { data } = useBaseQuery<FriendObjectType[]>(queryKeys.MY_FRIENDS_NEWS(), `friend-refrigs/recent`);

  return data?.data;
};

export default useGetFriendsNews;
