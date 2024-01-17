import React from 'react';
import { GrayBox, GreenButton, ModalBottom } from '@/components/atoms';
import { BoxSVG, CalendarSVG, FreezerSVG, MemoSVG } from '../atoms/Icon';
import { AppleIcon } from '../atoms/IngredientIcons';

const IngredientAddModal: React.FC<{
  toggleIsOpenIngredientAddModal: () => void;
}> = ({ toggleIsOpenIngredientAddModal }) => {
  return (
    <ModalBottom blackClickHandler={toggleIsOpenIngredientAddModal}>
      <div className="mb-[24px]">
        <div className="flex gap-[12px] mb-[32px]">
          <AppleIcon width={56} height={56} />
          <div className="heading1-bold">사과</div>
        </div>
        <div className="flex flex-col gap-[10px] mb-[32px]">
          <GrayBox>
            <div className="flex gap-[4px]">
              <CalendarSVG />
              <div className="heading4-semibold">소비기한</div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="p-[13px] bg-white rounded-[6px] text-center">
                2024년 01월 12일
              </div>
              <div>~</div>
              <div className="p-[13px] bg-white rounded-[6px] text-center">
                2024년 01월 6일
              </div>
            </div>
          </GrayBox>
          <GrayBox>
            <div className="flex gap-[4px]">
              <BoxSVG />
              <div className="heading4-semibold">수량</div>
            </div>
            <div>날짜~날짜</div>
          </GrayBox>
          <GrayBox>
            <div className="flex gap-[4px]">
              <FreezerSVG />
              <div className="heading4-semibold">냉동 보관</div>
            </div>
            <div>날짜~날짜</div>
          </GrayBox>
          <GrayBox>
            <div className="flex gap-[4px]">
              <MemoSVG />
              <div className="heading4-semibold">메모</div>
            </div>
            <div>인풋</div>
          </GrayBox>
        </div>
        <GreenButton className="w-full" text="추가완료" />
      </div>
    </ModalBottom>
  );
};

export default IngredientAddModal;
