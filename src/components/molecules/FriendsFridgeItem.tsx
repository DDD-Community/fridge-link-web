import Link from 'next/link';
import React from 'react';
import profileImg from '@/assets/profile.png';
import Image from 'next/image';
import { ArrowRightGray } from '../atoms/Icon';

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
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-[12px]">
        <div>
          <Image src={profileImg} alt={`누군가의 프로필`} />
        </div>
        <div className="flex flex-col">
          <div className="heading4-semibold text-gray7">{name}</div>
          <div className="body2-medium text-gray5">
            냉장고 저장 목록 {ingredientCount}개
          </div>
        </div>
      </div>
      <Link href={`${linkTo}`}>
        <ArrowRightGray />
      </Link>
    </div>
  );
};

export default FriendsFridgeItem;
