import React, { useState } from 'react';
import { Container } from '@/components/atoms';
import {
  EmptyIngredient,
  FridgeTab,
  IngredientItemBox,
} from '@/components/molecules';

const FridgeBoard: React.FC = ({ data }: { data?: any }) => {
  const [currentTabName, setCurrentTabName] = useState<'냉장' | '냉동'>('냉장');

  const handleTabNameChange: (tabName: '냉장' | '냉동') => void = (tabName) => {
    setCurrentTabName(tabName);
  };

  return (
    <Container className="p-[20px] bg-white">
      <FridgeTab
        currentTabName={currentTabName}
        handleTabNameChange={handleTabNameChange}
      />
      {data !== null || (Array.isArray(data) && data?.length !== 0) ? (
        <div className="flex flex-col w-full gap-[24px]">
          <IngredientItemBox />
          <IngredientItemBox />
          <IngredientItemBox />
        </div>
      ) : (
        <div>
          <EmptyIngredient
            text={`${currentTabName}칸에 추가된 식자재가 없어요!`}
          />
        </div>
      )}
    </Container>
  );
};

export default FridgeBoard;
