import WhiteBox from '@/components/atoms/WhiteBox';
import React from 'react';

const TermBoard: React.FC = () => {
  return (
    <div>
      소비기한
      <WhiteBox>
        <div>현재 냉장고에 추가된 식자재가 없어요!</div>
      </WhiteBox>
    </div>
  );
};

export default TermBoard;
