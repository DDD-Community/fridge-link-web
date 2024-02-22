import { CheckIcon } from '@/assets/icons';
import React from 'react';

const CheckBox: React.FC<{ active: boolean; onClick: () => void }> = ({
  active = false,
  onClick,
}) => {
  const commonStyle =
    'flex justify-center items-center w-[20px] h-[20px] rounded-full';
  return active ? (
    <button onClick={onClick} className={`${commonStyle}  bg-primary2`}>
      <CheckIcon />
    </button>
  ) : (
    <button onClick={onClick} className={`${commonStyle} border border-gray5`}>
      <CheckIcon stroke="#9299AA" />
    </button>
  );
};

export default CheckBox;
