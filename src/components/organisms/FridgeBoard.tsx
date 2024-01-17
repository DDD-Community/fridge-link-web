import React from 'react';
import { WhiteBox } from '@/components/atoms';
import { EmptyIngredient, FridgeTab } from '@/components/molecules';

const FridgeBoard: React.FC = () => {
  return (
    <WhiteBox className="p-[20px]">
      <FridgeTab />
      <div>
        <EmptyIngredient text="냉장칸에 추가된 식자재가 없어요!" />
      </div>
    </WhiteBox>
  );
};

export default FridgeBoard;
