import type { FriendshipSortType, ShareSortType, ShareStatusType } from '@/types/friendship';

import type { MySharesSortType } from '@/types/mypage';

export const queryKeys = {
  COUNT: () => ['count'],
  MY_FRIDGE_LIST: () => ['my_fridge_list'],
  MY_FRIENDS_COUNT: () => ['my_friends_count'],
  MY_FRIDGE_CONTENT: (id: number, location: string) => ['my_fridge', id, location],
  MY_INGREDIENTS_COUNT: () => ['my_ingredient_count'],
  MY_INGREDIENT_ID: (id: number) => ['my-ingredient', id],
  MY_FRIENDS_NEWS: () => ['my_friends_news'],
  INGREDIENT_LIST: () => ['ingredient_list'],
  INGREDIENT_ID: (id: number) => ['ingredient', id],
  INGREDIENTS: () => ['my-ingredient'],
  INGREDIENTS_RECENT: () => ['my-ingredient', 'recent'],
  KAKAO: () => ['kakao'],
  GOOGLE: () => ['google'],
  SHARES: (sort: ShareSortType, status: ShareStatusType) => ['shares', sort, status],
  MY_SHARES: (sort: MySharesSortType, status: ShareStatusType) => ['my-shares', sort, status],
  ME: () => ['my-info'],
  FRIENDSHIPS: (sort: FriendshipSortType) => ['friendship', sort],
  DELETE_FRIENDSHIP: () => ['deleteFriendship'],
  MY_INVITE_CODE: () => ['myInviteCode'],
  ADD_FRIENDSHIP: () => ['addFriendship'],
  SHARE_DETAIL: () => ['shareDetail'],
  SHARE_APPLICANTS: () => ['shareApplicants'],
  UPLOAD: () => ['upload'],
  ADD_SHARE: () => ['addShare'],
  MODIFY_SHARE_STATUS: () => ['modify_share_status'],
  APPLY_SHARE: () => ['apply_share'],
  DELETE_APPLY_SHARE: () => ['delete_share'],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
