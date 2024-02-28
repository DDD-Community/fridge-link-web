import { Container, Lottie } from '@/components/atoms';
import { EmptyBox, FridgeTab, IngredientItemBox } from '@/components/molecules';
import React, { useRef, useState } from 'react';

import type { IngredientDetailType } from '@/types/fridge';
import { useGetFridgeContentById } from '@/hooks/queries/fridge';
import { useObserver } from '@/hooks/useObserver';

const SelectFridgeBoard: React.FC<{
  fridgeId?: number;
  setSelectedIngredientInfo: React.Dispatch<React.SetStateAction<IngredientDetailType | undefined>>;
  onCloseSelectIngredient: () => void;
}> = ({ fridgeId, setSelectedIngredientInfo, onCloseSelectIngredient }) => {
  const bottom = useRef<HTMLDivElement>(null);
  const [currentTabName, setCurrentTabName] = useState<'냉장' | '냉동'>('냉장');

  const {
    data: ingredients,
    fetchNextPage: fetchIngredientNextPage,
    isFetchingNextPage: isFetchingIngredientNextPage,
  } = useGetFridgeContentById({
    id: fridgeId,
    sort: currentTabName === '냉장' ? 'FREEZING' : 'REFRIGERATION',
  });

  const handleTabNameChange: (tabName: '냉장' | '냉동') => void = (tabName) => {
    setCurrentTabName(tabName);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void fetchIngredientNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <Container className="p-[20px] bg-white">
      <FridgeTab currentTabName={currentTabName} handleTabNameChange={handleTabNameChange} />
      <div className="flex flex-col w-full gap-[24px]">
        {ingredients?.pages.map(({ content }) =>
          content && content.length > 0 ? (
            content.map((ingredient) => (
              <IngredientItemBox
                key={ingredient.ingredientDetailId}
                data={ingredient}
                handleSelectIngredientInfo={() => {
                  setSelectedIngredientInfo(ingredient);
                  onCloseSelectIngredient();
                }}
              />
            ))
          ) : (
            <div>
              <EmptyBox text={`${currentTabName}칸에 추가된 식자재가 없어요!`} />
            </div>
          ),
        )}
        {isFetchingIngredientNextPage ? <Lottie /> : <div ref={bottom} />}
      </div>
    </Container>
  );
};

export default SelectFridgeBoard;
