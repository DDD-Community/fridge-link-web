import type { FriendshipSortType } from '@/types/friendship';

export const queryKeys = {
  INGREDIENT_LIST: () => ['ingredient_list'],
  INGREDIENT: (id?: number) => (id ? ['ingredient', id] : ['ingredient']),
  KAKAO: () => ['kakao'],
  SHARES: () => ['shares'],
  ME: () => ['my-info'],
  FRIENDSHIPS: (sort: FriendshipSortType) => ['friendship', sort],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
