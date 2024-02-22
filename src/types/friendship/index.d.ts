export interface FriendshipData {
  userId: number;
  nickname: string;
  ingredientCount: number;
}

export type FriendshipSortType = 'nickname' | 'createdAt';
