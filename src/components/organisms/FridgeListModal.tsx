import { Button, ModalContainer } from '../atoms';
import { PlusIcon, TrashcanIcon } from '@/assets/icons';
import React, { useState } from 'react';

import { FridgeListItem } from '../molecules';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';
import { useRouter } from 'next/router';
import usePostFridge from '@/hooks/queries/fridge/usePostFridge';

const FridgeListModal: React.FC<{
  isMyFridgeList?: boolean;
}> = ({ isMyFridgeList }) => {
  const [currentFridge, setCurrentFridge] = useState({
    id: 1,
    name: '기본 냉장고',
  });

  const router = useRouter();
  const fridgeList = useGetMyFridgeList();
  const fridgeMutation = usePostFridge();

  const handleFridgeClick = (id: number) => {
    void router.push(`?fridge-id=${id}`);
  };

  const handleNewFridgeClick = () => {
    fridgeMutation.mutate({
      name: `내 냉장고 ${fridgeList !== null && fridgeList !== undefined ? fridgeList[fridgeList.length - 1].id + 1 : 1}`,
    });
  };

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
            isCurrentFridge={currentFridge.id === id}
            fridgeName={name}
            onClick={() => {
              setCurrentFridge({ id, name });
            }}
          />
        ))}
        <button
          onClick={handleNewFridgeClick}
          className="flex justify-center items-center h-[64px] border-2 rounded-[12px] text-gray3"
        >
          <PlusIcon />
          냉장고 추가
        </button>
      </div>
      <div className="flex w-full gap-[8px]">
        <button className="p-[13px] border-2 rounded-[12px]">
          <TrashcanIcon />
        </button>
        <Button
          className="flex-grow bg-primary2 text-white"
          text="이동하기"
          onClick={() => {
            handleFridgeClick(currentFridge.id);
          }}
        />
      </div>
    </ModalContainer>
  );
};

export default FridgeListModal;
