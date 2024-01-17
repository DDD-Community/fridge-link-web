import React, { useState } from 'react';
import { WhiteBox } from '@/components/atoms';
import { EmptyIngredient, FridgeTab } from '@/components/molecules';

const FridgeBoard: React.FC = () => {
  const [currentTabName, setCurrentTabName] = useState<'냉장' | '냉동'>('냉장');

  const handleTabNameChange: (tabName: '냉장' | '냉동') => void = (tabName) => {
    setCurrentTabName(tabName);
  };
  return (
    <WhiteBox className="p-[20px]">
      <FridgeTab
        currentTabName={currentTabName}
        handleTabNameChange={handleTabNameChange}
      />
      <div>
        <EmptyIngredient
          text={`${currentTabName}칸에 추가된 식자재가 없어요!`}
        />
      </div>
    </WhiteBox>
  );
};

export default FridgeBoard;
