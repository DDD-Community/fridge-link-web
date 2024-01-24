import React from 'react';
import { GrayBox } from '../atoms';

interface IngredientAddItemContainerProps {
  isRow: boolean;
  svgComponent: React.ReactNode;
  title: string;
  children: React.ReactNode;
}
const IngredientAddItemContainer: React.FC<IngredientAddItemContainerProps> = ({
  isRow,
  svgComponent,
  title,
  children,
}) => {
  return (
    <GrayBox
      className={
        isRow ? 'h-[60px] flex-row justify-between items-center' : undefined
      }
    >
      <div className="flex gap-[4px]">
        {svgComponent}
        <div className="heading4-semibold">{title}</div>
      </div>
      {children}
    </GrayBox>
  );
};

export default IngredientAddItemContainer;
