import React from 'react';
import EnterAllowLightSVG from '@/assets/icons/ICON/COMMON/ic_more-1.svg';

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
      <EnterAllowLightSVG />
    </button>
  );
};

export default GreenArrowButton;
