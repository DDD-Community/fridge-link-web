import type { ProfileEnum } from '../common';

export interface FriendshipData {
  userId: number;
  nickname: string;
  ingredientCount: number;
  profileImage: ProfileEnum;
}

export type FriendshipSortType = 'nickname' | 'createdAt';
