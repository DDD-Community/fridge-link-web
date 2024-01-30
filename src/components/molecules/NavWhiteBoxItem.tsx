import React from 'react';
import Link from 'next/link';
import { AngleIcon } from '@/assets/icons';

interface NavWhiteBoxItemProps {
  name: string;
  linkTo: string;
  text?: string;
  svgComponent: React.ReactNode;
}

const NavWhiteBoxItem: React.FC<NavWhiteBoxItemProps> = ({
  name,
  linkTo,
  text,
  svgComponent,
}) => {
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
        />
      )}
    </Link>
  );
};

export default NavWhiteBoxItem;
