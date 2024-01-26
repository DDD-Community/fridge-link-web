import React from 'react';
import { WhiteBox } from '../atoms';
import ArrowSVG from '@/assets/my/right_arrow.svg';
import Link from 'next/link';

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
      <label className="w-full text-gray6">{label}</label>
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
            <ArrowSVG />
          )}
        </Link>
      ))}
    </WhiteBox>
  );
};

export default NavWhiteBox;
