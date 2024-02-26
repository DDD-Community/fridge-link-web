import type { ProfileEnum } from '../common';

interface ShareData {
  shareId: number;
  title: string;
  itemName: string;
  content: string;
  shareTime: string;
  shareDate: string;
  limitDate: string;
  limitPerson: number;
  location: string;
  status: string;
  thumbnailImage: string;
  isApplied: boolean;
}

interface ShareDetailData extends ShareData {
  userName: string;
  profileImage: ProfileEnum;
  thumbNailImage: string;
}

interface ShareApplicantData {
  nickname: string;
  profileImage: ProfileEnum;
}
