import type { ProfileEnum } from '@/types/common';

export const returnProfileImg = (imgEnum: ProfileEnum) => {
  switch (imgEnum) {
    case 'GREEN':
      return 'https://fridge-link-img.s3.ap-northeast-2.amazonaws.com/profile_img_green.png';
    case 'RED':
      return 'https://fridge-link-img.s3.ap-northeast-2.amazonaws.com/profile_img_red.png';
    case 'BLUE':
      return 'https://fridge-link-img.s3.ap-northeast-2.amazonaws.com/profile_img_blue.png';
    case 'YELLOW':
      return 'https://fridge-link-img.s3.ap-northeast-2.amazonaws.com/profile_img_yellow.png';
    default:
      return 'https://fridge-link-img.s3.ap-northeast-2.amazonaws.com/profile_img_green.png';
  }
};
