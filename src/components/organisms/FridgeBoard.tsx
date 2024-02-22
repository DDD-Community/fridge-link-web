import React, { useState } from 'react';
import { Container } from '@/components/atoms';
import { EmptyBox, FridgeTab, IngredientItemBox } from '@/components/molecules';
import type { IngredientDetailType } from '@/types/fridge';

const FridgeBoard: React.FC<{ data?: IngredientDetailType[] | null }> = ({
  data,
}) => {
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
      {data && data.length !== 0 ? (
        <div className="flex flex-col w-full gap-[24px]">
          {data.map((ingredient) => (
            <IngredientItemBox
              key={ingredient.ingredientDetailId}
              data={ingredient}
            />
          ))}
        </div>
      ) : (
        <div>
          <EmptyBox text={`${currentTabName}칸에 추가된 식자재가 없어요!`} />
        </div>
      )}
    </Container>
  );
};

export default FridgeBoard;
