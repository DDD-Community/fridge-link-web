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
  thumbNailImage: string;
}

interface ShareDetailData extends ShareData {
  userName: string;
  profileImage: ProfileEnum;
}

interface ShareApplicantData {
  nickname: string;
  profileImage: ProfileEnum;
}
