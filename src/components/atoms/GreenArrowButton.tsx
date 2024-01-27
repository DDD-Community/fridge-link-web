import React from 'react';
import { Angle } from './Icon';

interface GreenArrowButtonProps {
  text: string;
  onClick?: () => void;
  className: string;
}

const GreenArrowButton: React.FC<GreenArrowButtonProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full bg-primary2 text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
    >
      {text}
      <Angle fill="#ffffff" width={16} height={16} transform="rotate(180)" />
    </button>
  );
};

export default GreenArrowButton;
