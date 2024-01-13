import React from 'react';

interface AlertBoxProps {
  count: number;
}

const AlertBox: React.FC<AlertBoxProps> = ({ count }) => {
  return (
    <div className="">
      <div>NOW</div>
      <div>
        소비기한이 얼마 안 남은 식자재가
        <span>{count}개</span> 있어요!
      </div>
    </div>
  );
};

export default AlertBox;
