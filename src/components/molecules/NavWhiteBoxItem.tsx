import { AngleIcon } from '@/assets/icons';
import Link from 'next/link';
import React from 'react';

interface NavWhiteBoxItemProps {
  name: string;
  linkTo: string;
  text?: string;
  svgComponent: React.ReactNode;
}

const NavWhiteBoxItem: React.FC<NavWhiteBoxItemProps> = ({ name, linkTo, text, svgComponent }) => {
  return (
    <Link href={linkTo} className="w-full flex justify-between items-center">
      <div className="flex items-center gap-[12px]">
        {svgComponent} {name}
      </div>
      {text ? (
        <div className="text-gray4">{text}</div>
      ) : (
        <AngleIcon
          fill={'gray'}
          width={16}
          height={16}
          transform="rotate(180)"
          style={{ transform: 'rotate(180deg)' }}
        />
      )}
    </Link>
  );
};

export default NavWhiteBoxItem;
