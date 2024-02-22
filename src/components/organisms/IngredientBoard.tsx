import React from 'react';
import { Container } from '@/components/atoms';
import { EmptyBox, IngredientItemBox } from '@/components/molecules';
import { useGetMyIngredientSummary } from '@/hooks/queries/home';

const TermBoard: React.FC = () => {
  const ingredientSummary = useGetMyIngredientSummary();

  console.log(ingredientSummary);
  return (
    <Container className="bg-white">
      {ingredientSummary && ingredientSummary.length !== 0 ? (
        <div className={`flex flex-col w-full gap-25`}>
          {ingredientSummary.map((data) => (
            <IngredientItemBox key={data.name} />
          ))}
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
