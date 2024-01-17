import React from 'react';
import IcNothingSVG from '@/assets/icons/ICON/COMMON/ic_nothing.svg';

interface EmptyIngredientProps {
  text: string;
}

const EmptyIngredient: React.FC<EmptyIngredientProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-268">
      <IcNothingSVG />
      <div className="body1-medium text-gray3">{text}</div>
    </div>
  );
};

export default EmptyIngredient;
