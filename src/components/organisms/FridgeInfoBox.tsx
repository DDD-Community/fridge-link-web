import { AngleIcon } from '@/assets/icons';
import { Button } from '../atoms';
import type { CurrentFridgeInfoType } from '@/types/fridge';
import React from 'react';
import { useRouter } from 'next/router';

const FridgeInfoBox: React.FC<{
  currentFridgeInfo: CurrentFridgeInfoType;
  fridgeName?: string;
  userName: string;
  toggleIsOpenFridgeListModal: () => void;
  isOkIngredientAdd?: boolean;
}> = ({ currentFridgeInfo, userName = '', toggleIsOpenFridgeListModal, isOkIngredientAdd }) => {
  const router = useRouter();

  console.log(currentFridgeInfo);
  return (
    <div className="flex justify-between items-end mb-[28px]">
      <div className="flex flex-col gap-[12px]">
        <div className="body1-medium text-gray7">{userName ?? '사용자정보없음'} 님의</div>
        <div className="flex items-center gap-[8px]" onClick={toggleIsOpenFridgeListModal}>
          <div className="heading1-bold">{currentFridgeInfo.fridgeName ?? '냉장고정보없음'}</div>
          <AngleIcon
            width={16}
            height={16}
            fill="#000000"
            transform="rotate(-90)"
            style={{ transform: 'rotate(-90deg)' }}
          />
        </div>
      </div>
      {isOkIngredientAdd && (
        <Button
          className="rounded-6 w-[100px] p-[10px] body1-semibold bg-primary2 text-white"
          text="식자재 추가"
          onClick={() => {
            void router.push(`/fridge/add?fridgeid=${currentFridgeInfo.fridgeId}&name=${currentFridgeInfo.fridgeName}`);
          }}
        />
      )}
    </div>
  );
};

export default FridgeInfoBox;
