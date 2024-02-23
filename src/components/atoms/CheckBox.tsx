import { CheckIcon } from '@/assets/icons';
import React from 'react';

const CheckBox: React.FC<{ active: boolean; onClick: () => void }> = ({
  active = false,
  onClick,
}) => {
  const commonStyle =
    'flex justify-center items-center w-[20px] h-[20px] rounded-full';
  const buttonClassName = `${commonStyle} ${active ? 'bg-primary2' : 'border border-gray5'}`;
  return (
    <button onClick={onClick} className={buttonClassName}>
      <CheckIcon stroke={active ? '#F1F2F4' : '#9299AA'} />
    </button>
  );
};

export default CheckBox;
