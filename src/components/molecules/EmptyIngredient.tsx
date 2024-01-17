import React from 'react';
import IcNothingSVG from '@/assets/icons/ICON/COMMON/ic_nothing.svg';

const EmptyIngredient: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-268">
      <IcNothingSVG />
      <div className="body1-medium text-gray3">
        현재 냉장고에 추가된 식자재가 없어요!
      </div>
    </div>
  );
};

export default EmptyIngredient;
