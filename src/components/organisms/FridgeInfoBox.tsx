import { AngleIcon } from '@/assets/icons';
import { Button } from '../atoms';
import React from 'react';

const FridgeInfoBox: React.FC<{
  toggleIsOpenFridgeListModal: () => void;
  toggleIsOpenIngredientAddModal?: () => void;
}> = ({ toggleIsOpenFridgeListModal, toggleIsOpenIngredientAddModal }) => {
  return (
    <div className="flex justify-between items-end mb-[28px]">
      <div className="flex flex-col gap-[12px]">
        <div className="body1-medium text-gray7">홍길동님의</div>
        <div
          className="flex items-center gap-[8px]"
          onClick={toggleIsOpenFridgeListModal}
        >
          <div className="heading1-bold">기본 냉장고</div>
          <AngleIcon
            width={16}
            height={16}
            fill="#000000"
            transform="rotate(-90)"
          />
        </div>
      </div>
      {toggleIsOpenIngredientAddModal && (
        <Button
          className="rounded-6 w-[100px] p-[10px] body1-semibold bg-primary2 text-white"
          text="식자재 추가"
          onClick={toggleIsOpenIngredientAddModal}
        />
      )}
    </div>
  );
};

export default FridgeInfoBox;
