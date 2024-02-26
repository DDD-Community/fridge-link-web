import React from 'react';

interface IngredientDateTagProps {
  dDay: number;
  className?: string;
}

const IngredientDateTag: React.FC<IngredientDateTagProps> = ({ dDay }) => {
  let className;
  let backgroundColor;
  let textDay;

  // dDay에 따라서 className 설정
  if (dDay <= 0) {
    className = 'bg-gray1 text-gray6';
    backgroundColor = '';
    textDay = `D+${Math.abs(dDay)}`;
  } else if (dDay === 0) {
    className = 'bg-pink text-point3';
    backgroundColor = '#FFEBE6';
    textDay = `D-Day`;
  } else if (dDay <= 5) {
    className = 'text-point3';
    backgroundColor = '#FFEBE6';
    textDay = `D-${dDay}`;
  } else {
    className = 'text-primary3';
    backgroundColor = '#E1F4EF';
    textDay = `D-${dDay}`;
  }

  return (
    <div
      className={`min-w-[64px] p-9 rounded-6 text-center body1-semibold ${className}`}
      style={{ backgroundColor }}
    >
      {textDay}
    </div>
  );
};

export default IngredientDateTag;
