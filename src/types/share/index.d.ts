import type { ProfileEnum } from '../common';
import type { ShareStatusType } from '../friendship';

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
  status: ShareStatusType;
  thumbnailImage: string;
  isApplied: boolean;
}

interface ShareDetailData extends ShareData {
  nickname: string;
  profileImage: ProfileEnum;
  isCreatedByCurrentLoginUser: boolean;
}

interface ShareApplicantData {
  nickname: string;
  profileImage: ProfileEnum;
}

interface AddShareReq {
  title: string;
  ingredientDetailId: number;
  content: string;
  shareTime: string;
  shareDate: string;
  limitPerson: number;
  location: string;
  status: string;
  thumbnailImage: string;
}
