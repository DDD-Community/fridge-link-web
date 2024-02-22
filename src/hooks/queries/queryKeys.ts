import type { FriendshipSortType } from '@/types/friendship';

export const queryKeys = {
  INGREDIENT: (id?: number) => (id ? ['ingredient', id] : ['ingredient']),
  KAKAO: () => ['kakao'],
  SHARES: () => ['shares'],
  FRIENDSHIPS: (sort: FriendshipSortType) => ['friendship', sort],
  DELETE_FRIENDSHIP: () => ['deleteFriendship'],
  MY_INVITE_CODE: () => ['myInviteCode'],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
