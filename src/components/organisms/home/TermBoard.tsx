import React from 'react';
import WhiteBox from '@/components/atoms/WhiteBox';
import IcNothingSVG from '@/assets/icons/ICON/COMMON/ic_nothing.svg';

const TermBoard: React.FC = () => {
  return (
    <div>
      소비기한
      <WhiteBox>
        <div className="flex flex-col items-center">
          <IcNothingSVG />
          <div>현재 냉장고에 추가된 식자재가 없어요!</div>
        </div>
      </WhiteBox>
    </div>
  );
};

export default TermBoard;
