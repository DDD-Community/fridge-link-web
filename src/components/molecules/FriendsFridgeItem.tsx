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
    <div>
      <div>프로필</div>
      <div>
        <div>{name}</div>
        <div>냉장고 저장 목록 {ingredientCount}개</div>
      </div>
      <Link href={`${linkTo}`}>이동</Link>
    </div>
  );
};

export default FriendsFridgeItem;
