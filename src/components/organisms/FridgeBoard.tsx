import React from 'react';
import { WhiteBox } from '@/components/atoms';
import { EmptyIngredient, FridgeTab } from '@/components/molecules';

interface FridgeBoardProps {
  currentTabName: '냉장' | '냉동';
  handleTabNameChange: (tabName: '냉장' | '냉동') => void;
}
const FridgeBoard: React.FC<FridgeBoardProps> = ({
  currentTabName,
  handleTabNameChange,
}) => {
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
