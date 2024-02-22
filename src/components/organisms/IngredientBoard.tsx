import React from 'react';
import { Container } from '@/components/atoms';
import { EmptyBox, IngredientItemBox } from '@/components/molecules';

const TermBoard: React.FC = () => {
  const isIngredientItem = true;

  return (
    <Container className="bg-white">
      {isIngredientItem ? (
        <div className={`flex flex-col w-full gap-25`}>
          <IngredientItemBox />
          <IngredientItemBox />
        </div>
      ) : (
        <div className={`flex flex-col items-center`}>
          <EmptyBox text="현재 냉장고에 추가된 식자재가 없어요!" />
        </div>
      )}
    </Container>
  );
};

export default TermBoard;
