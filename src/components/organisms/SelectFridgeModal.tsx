import { Button, ModalContainer } from '../atoms';
import React, { useState } from 'react';

import type { FridgeData } from '@/types/fridge';
import { FridgeListItem } from '../molecules';

const SelectFridgeModal: React.FC<{
  fridgeList: Array<{
    id: number;
    name: string;
  }>;
  selectedFridge?: FridgeData;
  onCloseFridgeListModal: () => void;
  setSelectedFridge: React.Dispatch<React.SetStateAction<FridgeData | undefined>>;
}> = ({ fridgeList, selectedFridge, onCloseFridgeListModal, setSelectedFridge }) => {
  const [isEditingFridgeName, setIsEditingFridgeName] = useState(false);

  const togglesetIsEditingFridgeName = () => {
    setIsEditingFridgeName((prev) => !prev);
  };

  return (
    <ModalContainer>
      <div>
        <div className="heading2-bold">냉장고 목록</div>
        <div className="body2-medium text-gray5">자유롭게 여러 냉장고를 정리할 수 있어요</div>
      </div>
      <div className="flex flex-col gap-[10px] mt-[25px] mb-[32px]">
        {fridgeList?.map(({ id, name }) => (
          <FridgeListItem
            isEditingFridgeName={isEditingFridgeName}
            togglesetIsEditingFridgeName={togglesetIsEditingFridgeName}
            newFridgeName={{ id: 0, name: '' }}
            isMine={false}
            key={id}
            isCurrentFridge={selectedFridge?.id === id}
            id={id}
            fridgeName={name}
            onClick={() => {
              setSelectedFridge({ id, name });
            }}
          />
        ))}
      </div>
      <div className="flex w-full gap-[8px]">
        <Button className="flex-grow bg-primary2 text-white" text="이동하기" onClick={onCloseFridgeListModal} />
      </div>
    </ModalContainer>
  );
};

export default SelectFridgeModal;
