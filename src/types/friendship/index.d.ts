import type { ProfileEnum } from '../common';

export interface FriendshipData {
  userId: number;
  nickname: string;
  ingredientCount: number;
  profileImage: ProfileEnum;
}

export type FriendshipSortType = 'nickname' | 'createdAt';

export type ShareSortType = 'dueDate' | 'registeredDate';

export type ShareStatusType = 'SHARE_START' | 'SHARE_IN_PROGRESS' | 'SHARE_END';
