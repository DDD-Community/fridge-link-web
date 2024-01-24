import Link from 'next/link';
import React from 'react';

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
    <div className="w-full flex justify-between">
      <div className="flex gap-[12px]">
        <div>프로필</div>
        <div className="flex flex-col">
          <div className="heading4-semibold text-gray7">{name}</div>
          <div className="body2-medium text-gray5">
            냉장고 저장 목록 {ingredientCount}개
          </div>
        </div>
      </div>
      <Link href={`${linkTo}`}>이동</Link>
    </div>
  );
};

export default FriendsFridgeItem;
