import { AngleIcon } from '@/assets/icons';
import React from 'react';

const FriendListItem: React.FC<{ name: string; count: number }> = ({
  name,
  count,
}) => {
  return (
    <div className="flex p-[16px] mb-[12px] justify-between items-center bg-white rounded-[12px]">
      <div className="flex">
        <div className="w-10 h-10 aspect-square rounded-full bg-gray3" />
        <div className="ml-[16px]">
          <p className="mb-[4px] heading4-semibold text-gray7">{name}</p>
          <p className="body2-medium text-gray5">{count}</p>
        </div>
      </div>
      <AngleIcon
        width={16}
        height={16}
        fill="#CCCFD7"
        transform="rotate(180)"
      />
    </div>
  );
};

export default FriendListItem;
