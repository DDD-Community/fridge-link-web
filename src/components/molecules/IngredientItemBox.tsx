import React from 'react';
import { IngredientDateTag } from '../atoms';
import { AppleIcon } from '@/components/atoms/IngredientIcons';
import type { IngredientDetailType } from '@/types/fridge';

const IngredientItemBox: React.FC<{ data?: IngredientDetailType }> = ({
  data,
}) => {
  const addDate = new Date(data?.addDate as string);
  const expirationDate = new Date(data?.expirationDate as string);
  const today = new Date();

  const dDay = Math.ceil(
    (expirationDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000),
  );

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-8">
        <AppleIcon width={38} height={38} />
        <div className="flex flex-col gap-8">
          <div className="heading4-semibold">{data?.name ?? '사과'}</div>
          <div className="body2-medium text-gray5 ">
            {`${addDate.getFullYear()}년 ${addDate.getMonth() + 1}월 ${addDate.getDay()}일 저장`}
          </div>
        </div>
      </div>
      <IngredientDateTag dDay={dDay} />
    </div>
  );
};

export default IngredientItemBox;
