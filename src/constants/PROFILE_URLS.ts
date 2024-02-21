import type { ProfileType } from '@/types/common';

export interface Profile {
  string: ProfileType;
  imgUrl: string;
  pointColor: string;
}

export const PROPILE_URLS: Record<ProfileType, Profile> = {
  GREEN: {
    string: 'GREEN',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/green-nor.svg',
    pointColor: '#3CAA8D',
  },
  RED: {
    string: 'RED',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/red-nor.svg',
    pointColor: '#CB5D45',
  },
  BLUE: {
    string: 'BLUE',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/blue-nor.svg',
    pointColor: '#5C93D4',
  },
  YELLOW: {
    string: 'YELLOW',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/yellow-nor.svg',
    pointColor: '#D5B02D',
  },
};
