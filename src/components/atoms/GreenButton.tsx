import React from 'react';
import IcMoreSVG from '@/assets/icons/ICON/COMMON/ic_more-1.svg';

interface GreenButtonProps {
  text: string;
  linkTo: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ text }) => {
  return (
    <button className="flex items-center justify-center w-full bg-primary2 text-white p-18 gap-5 rounded-12">
      {text}
      <IcMoreSVG />
    </button>
  );
};

export default GreenButton;
