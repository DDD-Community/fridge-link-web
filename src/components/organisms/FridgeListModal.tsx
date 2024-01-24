import React, { useState } from 'react';
import { Button, ModalBottom } from '../atoms';
import { FridgeListItem } from '../molecules';
import { PlusSVG, TrashcanSVG } from '../atoms/Icon';

const FridgeListModal: React.FC<{
  toggleIsOpenFridgeListModal: () => void;
}> = ({ toggleIsOpenFridgeListModal }) => {
  const [currentFridgeName, setCurrentFridgeName] = useState('기본 냉장고');
  const FRIDGE_NAME_LIST = ['기본 냉장고', '김치 냉장고', '주류 냉장고'];
  return (
    <ModalBottom blackClickHandler={toggleIsOpenFridgeListModal}>
      <div>
        <div className="heading2-bold">냉장고 목록</div>
        <div className="body2-medium text-gray5">
          자유롭게 여러 냉장고를 정리할 수 있어요
        </div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[25px] mb-[32px]">
        {FRIDGE_NAME_LIST.map((fridgeName) => (
          <FridgeListItem
            isCurrentFridge={currentFridgeName === fridgeName}
            fridgeName={fridgeName}
            onClick={() => {
              setCurrentFridgeName(fridgeName);
            }}
          />
        ))}

        <button className="flex justify-center items-center h-[64px] border-2 rounded-[12px] text-gray3">
          <PlusSVG />
          냉장고 추가
        </button>
      </div>
      <div className="flex w-full gap-[8px]">
        <button className="p-[13px] border-2 border-2 rounded-[12px]">
          <TrashcanSVG />
        </button>
        <Button className="flex-grow bg-primary2" text="이동하기" />
      </div>
    </ModalBottom>
  );
};

export default FridgeListModal;
