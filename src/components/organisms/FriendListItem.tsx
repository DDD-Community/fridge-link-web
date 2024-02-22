import { AngleIcon } from '@/assets/icons';
import { type ProfileEnum } from '@/types/common';
import { returnProfileImg } from '@/utils/returnProfileImg';
import Image from 'next/image';
import React from 'react';

const FriendListItem: React.FC<{
  name: string;
  count: number;
  profileEnum: ProfileEnum;
}> = ({ name, count, profileEnum }) => {
  return (
    <div className="flex p-[16px] mb-[12px] justify-between items-center bg-white rounded-[12px]">
      <div className="flex items-center">
        <Image
          src={returnProfileImg(profileEnum)}
          width={40}
          height={40}
          className="w-[40px] h-[40px] aspect-square"
          alt="친구 프로필"
        />
        <div className="ml-[16px]">
          <p className="mb-[4px] heading4-semibold text-gray7">{name}</p>
          <p className="body2-medium text-gray5">
            냉장고 식자재 목록 {count}개
          </p>
        </div>
      </div>
      <AngleIcon
        width={16}
        height={16}
        fill="#CCCFD7"
        transform="rotate(180)"
        className="z-0"
      />
    </div>
  );
};

export default FriendListItem;
