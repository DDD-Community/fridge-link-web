import Image from 'next/image';
import { IngredientDateTag } from '../atoms';
import type { IngredientDetailType } from '@/types/fridge';
import React from 'react';

const IngredientItemBox: React.FC<{
  data?: IngredientDetailType;
  handleDetailIngreditentId?: (id: number) => void;
  handleSelectIngredientInfo?: () => void;
}> = ({ data, handleDetailIngreditentId, handleSelectIngredientInfo }) => {
  const addDate = new Date(data?.addDate as string);
  const expirationDate = new Date(data?.expirationDate as string);
  const today = new Date();

  const dDay = Math.ceil((expirationDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));

  return (
    <div
      className="flex justify-between items-center"
      onClick={() => {
        if (handleDetailIngreditentId) {
          handleDetailIngreditentId(data?.ingredientDetailId ?? 0);
        }
        if (handleSelectIngredientInfo) {
          handleSelectIngredientInfo();
        }
      }}
    >
      <div className="flex justify-between items-center gap-8">
        <Image src={data?.iconImage ?? ''} alt={data?.name ?? ''} width={50} height={50} />
        <div className="flex flex-col gap-8">
          <div className="heading4-semibold">{data?.name ?? ''}</div>
          <div className="body2-medium text-gray5 ">
            {`${addDate.getFullYear()}년 ${addDate.getMonth() + 1}월 ${addDate.getDate()}일 저장`}
          </div>
        </div>
      </div>
      <IngredientDateTag dDay={dDay} />
    </div>
  );
};

export default IngredientItemBox;
