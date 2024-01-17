import React from 'react';
import EnterAllowLightSVG from '@/assets/icons/ICON/COMMON/ic_more-1.svg';
import Link from 'next/link';

interface GreenLinkProps {
  text: string;
  linkTo: string;
  className: string;
}

const GreenLink: React.FC<GreenLinkProps> = ({ text, className }) => {
  return (
    <Link
      href="/myfridege"
      className={`flex items-center justify-center w-full bg-primary2 text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
    >
      {text}
      <EnterAllowLightSVG />
    </Link>
  );
};

export default GreenLink;
