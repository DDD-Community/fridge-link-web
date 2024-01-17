import React from 'react';
import { IngredientDateTag } from '../atoms';
import AppleSVG from '@/assets/icons/Frame 35.svg';

interface IngredientItemBoxProps {
  title?: string;
  svgUrl?: string;
  expiration?: string;
  dDay?: number;
  className?: string;
}

const IngredientItemBox: React.FC<IngredientItemBoxProps> = ({ dDay }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-8">
        <AppleSVG width={38} height={38} />
        <div className="flex flex-col gap-8">
          <div className="heading4-semibold">사과</div>
          <div className="body2-medium text-gray5 ">12월 21일 저장</div>
        </div>
      </div>
      <IngredientDateTag dDay={4} />
    </div>
  );
};

export default IngredientItemBox;
