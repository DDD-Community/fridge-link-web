import React from 'react';
import { GreenButton } from '../atoms';
import { AllowBottom } from '../atoms/Icon';

const FridgeInfoBox: React.FC<{
  toggleIsOpenIngredientAddModal: () => void;
}> = ({ toggleIsOpenIngredientAddModal }) => {
  return (
    <div className="flex justify-between items-end mb-[28px]">
      <div className="flex flex-col gap-[12px]">
        <div className="body1-medium text-gray7">홍길동님의</div>
        <div className="flex items-center gap-[8px]">
          <div className="heading1-bold">기본 냉장고</div>
          <AllowBottom />
        </div>
      </div>
      <GreenButton
        className="rounded-6 w-[100px] p-[10px] body1-semibold"
        text="식자재 추가"
        handler={toggleIsOpenIngredientAddModal}
      />
    </div>
  );
};

export default FridgeInfoBox;
