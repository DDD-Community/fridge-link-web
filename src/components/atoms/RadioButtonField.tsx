import { Radio } from '@/components/atoms';
import React from 'react';

const RadioButtonField: React.FC<{
  label: string;
  onClick: () => void;
  checked: boolean;
}> = ({ label, onClick, checked }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-1 w-screen px-[20px] py-[24px] justify-between"
    >
      <p className="heading3-semibold">{label}</p>
      <Radio checked={checked} />
    </button>
  );
};

export default RadioButtonField;
