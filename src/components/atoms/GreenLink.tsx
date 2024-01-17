import React from 'react';
import IcMoreSVG from '@/assets/icons/ICON/COMMON/ic_more-1.svg';

interface GreenLinkProps {
  text: string;
  linkTo: string;
  className: string;
}

const GreenLink: React.FC<GreenLinkProps> = ({ text, className }) => {
  return (
    <button
      className={`flex items-center justify-center w-full bg-primary2 text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
    >
      {text}
      <IcMoreSVG />
    </button>
  );
};

export default GreenLink;
