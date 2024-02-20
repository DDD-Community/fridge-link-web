import type { FriendshipSortType } from '@/types/friendship';

export const queryKeys = {
  MY_FRIDGE_LIST: () => ['my_fridge_list'],
  MY_FRIENDS_COUNT: () => ['my_friends_count'],
  INGREDIENT_LIST: () => ['ingredient_list'],
  INGREDIENT_ID: (id: string) => ['ingredient', id],
  INGREDIENTS: () => ['my-ingredient'],
  KAKAO: () => ['kakao'],
  SHARES: () => ['shares'],
  ME: () => ['my-info'],
  FRIENDSHIPS: (sort: FriendshipSortType) => ['friendship', sort],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
