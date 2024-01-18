import React, { useState } from 'react';
import { GreenButton, ModalBottom, Toggle } from '@/components/atoms';
import { BoxSVG, CalendarSVG, FreezerSVG, MemoSVG } from '../atoms/Icon';
import { AppleIcon } from '../atoms/IngredientIcons';
import { Counter, IngredientAddItem } from '../molecules';
import useCount from '@/hooks/useCount';

const IngredientAddModal: React.FC<{
  toggleIsOpenIngredientAddModal: () => void;
  toggleIsOppenToastMessage: () => void;
}> = ({ toggleIsOpenIngredientAddModal, toggleIsOppenToastMessage }) => {
  const [isInFreezer, setIsInFreezer] = useState(false);
  const [memoContent, setMemoContent] = useState('');
  const { currentCount, handleIncreaseCount, handleDecreaseCount } = useCount();

  const toggleIsInFreezer: (e: React.MouseEvent) => void = (e) => {
    e.stopPropagation();
    setIsInFreezer((prev) => !prev);
  };

  const handleSubmit: () => void = () => {
    console.log({ currentCount, isInFreezer, memoContent });
    toggleIsOpenIngredientAddModal();
    toggleIsOppenToastMessage();
  };

  return (
    <ModalBottom blackClickHandler={toggleIsOpenIngredientAddModal}>
      <div className="mb-[24px]">
        <div className="flex gap-[12px] mb-[32px]">
          <AppleIcon width={56} height={56} />
          <div className="heading1-bold">사과</div>
        </div>
        <div className="flex flex-col gap-[10px] mb-[32px]">
          <IngredientAddItem
            isRow={false}
            svgComponent={<CalendarSVG />}
            title="소비기한"
          >
            <div className="flex items-center w-full gap-20">
              <div className="p-[13px] bg-white rounded-[6px] body1-medium text-center text-gray6 flex-grow">
                2024년 01월 12일
              </div>
              <div className="body1-medium text-center text-gray6">~</div>
              <div className="p-[13px] bg-white rounded-[6px] body1-medium text-center text-gray6 flex-grow">
                2024년 01월 6일
              </div>
            </div>
          </IngredientAddItem>
          <IngredientAddItem
            isRow={true}
            svgComponent={<BoxSVG />}
            title="수량"
          >
            <Counter
              currentCount={currentCount}
              handleIncreaseCount={handleIncreaseCount}
              handleDecreaseCount={handleDecreaseCount}
            />
          </IngredientAddItem>
          <IngredientAddItem
            isRow={true}
            svgComponent={<FreezerSVG />}
            title="냉동보관"
          >
            <Toggle isToggleOn={isInFreezer} toggleState={toggleIsInFreezer} />
          </IngredientAddItem>
          <IngredientAddItem
            isRow={false}
            svgComponent={<MemoSVG />}
            title="메모"
          >
            <input
              value={memoContent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMemoContent(e.target.value);
              }}
              className="w-full p-[12px] rounded-[6px] body1-medium"
              placeholder="식자재 관련 정보를 입력해 주세요."
            />
          </IngredientAddItem>
        </div>
        <GreenButton
          className="w-full"
          text="추가완료"
          handler={handleSubmit}
        />
      </div>
    </ModalBottom>
  );
};

export default IngredientAddModal;
