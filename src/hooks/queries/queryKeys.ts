import type { FriendshipSortType } from '@/types/friendship';

export const queryKeys = {
  MY_FRIDGE_LIST: () => ['my_fridge_list'],
  MY_FRIENDS_COUNT: () => ['my_friends_count'],
  MY_FRIDGE_CONTENT: (id: string) => ['my_fridge', id],
  MY_INGREDIENTS_COUNT: () => ['my_ingredient_count'],
  INGREDIENT_LIST: () => ['ingredient_list'],
  INGREDIENT_ID: (id: number) => ['ingredient', id],
  INGREDIENTS: () => ['my-ingredient'],
  KAKAO: () => ['kakao'],
  SHARES: () => ['shares'],
  ME: () => ['my-info'],
  FRIENDSHIPS: (sort: FriendshipSortType) => ['friendship', sort],
  DELETE_FRIENDSHIP: () => ['deleteFriendship'],
  MY_INVITE_CODE: () => ['myInviteCode'],
  ADD_FRIENDSHIP: () => ['addFriendship'],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
