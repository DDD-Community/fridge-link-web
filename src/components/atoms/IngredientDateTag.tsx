import React from 'react';

interface IngredientDateTagProps {
  dDay: number;
  className?: string;
}

const IngredientDateTag: React.FC<IngredientDateTagProps> = ({ dDay }) => {
  let className;
  let textDay;

  // dDay에 따라서 className 설정
  if (dDay === -1) {
    className = 'bg-gray1 text-gray6 ';
    textDay = `D+${dDay}`;
  } else if (dDay === 0) {
    className = 'bg-pink text-point3';
    textDay = `D-Day`;
  } else if (dDay <= 5) {
    className = 'bg-pink text-point3';
    textDay = `D-${dDay}`;
  } else {
    className = 'bg-green text-primary3';
    textDay = `D-${dDay}`;
  }

  return (
    <div
      className={`w-64 p-9 rounded-6 text-center body1-semibold ${className}`}
    >
      {textDay}
    </div>
  );
};

export default IngredientDateTag;
