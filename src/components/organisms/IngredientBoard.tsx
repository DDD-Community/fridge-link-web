import React from 'react';
import { WhiteBox } from '@/components/atoms';
import { EmptyIngredient, IngredientItemBox } from '@/components/molecules';

const TermBoard: React.FC = () => {
  const isIngredientItem = true;

  return (
    <WhiteBox>
      {isIngredientItem ? (
        <div className={`flex flex-col w-full gap-25`}>
          <IngredientItemBox />
          <IngredientItemBox />
        </div>
      ) : (
        <div className={`flex flex-col items-center`}>
          <EmptyIngredient text="현재 냉장고에 추가된 식자재가 없어요!" />
        </div>
      )}
    </WhiteBox>
  );
};

export default TermBoard;