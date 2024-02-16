import { AngleIcon } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profileImg from '@/assets/profile.png';

interface FriendsFridgeItemProps {
  name: string;
  ingredientCount: number;
  linkTo: string;
}

const FriendsFridgeItem: React.FC<FriendsFridgeItemProps> = ({
  name,
  ingredientCount,
  linkTo,
}) => {
  return (
    <Link
      href={`friend/1`}
      className="w-full flex items-center justify-between"
    >
      <div className="flex gap-[12px]">
        <div>
          <Image
            src={profileImg}
            width={50}
            height={50}
            alt={`누군가의 프로필`}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="heading4-semibold text-gray7">{name}</div>
          <div className="body2-medium text-gray5">
            냉장고 저장 목록 {ingredientCount}개
          </div>
        </div>
      </div>
      <Link href={`${linkTo}`}>
        <AngleIcon width={16} height={16} transform="rotate(180)" />
      </Link>
    </Link>
  );
};

export default FriendsFridgeItem;
