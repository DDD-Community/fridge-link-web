import Image from 'next/image';
import React from 'react';
import type { ShareApplicantData } from '@/types/share';
import { returnProfileImg } from '@/utils/returnProfileImg';

const ShareApplicantListItem: React.FC<{
  idx: number;
  data: ShareApplicantData;
}> = ({ idx, data }) => {
  return (
    <div className="flex items-center mb-[20px]">
      <p className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-gray0 body2-semibold text-gray5">
        {idx}
      </p>
      <Image
        src={returnProfileImg(data.profileImage)}
        width={40}
        height={40}
        className="w-[40px] h-[40px] aspect-square mx-[8px]"
        alt="신청자 프로필"
      />
      <p className="text-gray7 heading4-semibold">{data.nickname}</p>
    </div>
  );
};

export default ShareApplicantListItem;
