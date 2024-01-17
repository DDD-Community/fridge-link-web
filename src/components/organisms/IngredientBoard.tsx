import React from 'react';
import WhiteBox from '@/components/atoms/WhiteBox';
import EmptyIngredient from '../molecules/EmptyIngredient';
import IngredientItemBox from '../molecules/IngredientItemBox';

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
          <EmptyIngredient />
        </div>
      )}
    </WhiteBox>
  );
};

export default TermBoard;
