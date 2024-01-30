import React from 'react';
import { WhiteBox } from '../atoms';
import Link from 'next/link';
import { AngleIcon } from '@/assets/icons';

interface NavItem {
  name: string;
  linkTo: string;
  text?: string;
  svgComponent: React.ReactNode;
}

interface NavWhiteBoxProps {
  label: string;
  list: NavItem[];
}

const NavWhiteBox: React.FC<NavWhiteBoxProps> = ({ label, list }) => {
  return (
    <WhiteBox>
      <label className="w-full text-gray6 body1-regular">{label}</label>
      {list.map((navItem) => (
        <Link
          href={navItem.linkTo}
          className="w-full flex justify-between items-center"
        >
          <div className="flex items-center gap-[12px]">
            {navItem.svgComponent} {navItem.name}
          </div>
          {navItem.text ? (
            <div className="text-gray4">{navItem.text}</div>
          ) : (
            <AngleIcon
              fill={'gray'}
              width={16}
              height={16}
              transform="rotate(180)"
            />
          )}
        </Link>
      ))}
    </WhiteBox>
  );
};

export default NavWhiteBox;
