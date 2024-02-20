import { Button, ModalContainer } from '../atoms';
import { PlusIcon, TrashcanIcon } from '@/assets/icons';
import React, { useState } from 'react';

import { FridgeListItem } from '../molecules';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';

const FridgeListModal: React.FC<{
  isMyFridgeList?: boolean;
}> = ({ isMyFridgeList }) => {
  const [currentFridgeName, setCurrentFridgeName] = useState('기본 냉장고');

  const fridgeList = useGetMyFridgeList();

  return (
    <ModalContainer>
      <div>
        <div className="heading2-bold">냉장고 목록</div>
        <div className="body2-medium text-gray5">
          자유롭게 여러 냉장고를 정리할 수 있어요
        </div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[25px] mb-[32px]">
        {fridgeList?.map(({ id, name }) => (
          <FridgeListItem
            key={id}
            isCurrentFridge={currentFridgeName === name}
            fridgeName={name}
            onClick={() => {
              setCurrentFridgeName(name);
            }}
          />
        ))}

        <button className="flex justify-center items-center h-[64px] border-2 rounded-[12px] text-gray3">
          <PlusIcon />
          냉장고 추가
        </button>
      </div>
      <div className="flex w-full gap-[8px]">
        <button className="p-[13px] border-2 rounded-[12px]">
          <TrashcanIcon />
        </button>
        <Button className="flex-grow bg-primary2 text-white" text="이동하기" />
      </div>
    </ModalContainer>
  );
};

export default FridgeListModal;
