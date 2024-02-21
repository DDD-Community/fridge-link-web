import type { FriendshipSortType } from '@/types/friendship';

export const queryKeys = {
  MY_FRIDGE_LIST: () => ['my_fridge_list'],
  MY_FRIENDS_COUNT: () => ['my_friends_count'],
  MY_FRIDGE_CONTENT: (id: string) => ['my_fridge', id],
  INGREDIENT_LIST: () => ['ingredient_list'],
  INGREDIENT_ID: (id: string) => ['ingredient', id],
  INGREDIENTS: () => ['my-ingredient'],
  KAKAO: () => ['kakao'],
  SHARES: () => ['shares'],
  ME: () => ['my-info'],
  FRIENDSHIPS: (sort: FriendshipSortType) => ['friendship', sort],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
