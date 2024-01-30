import React from 'react';
import { WhiteContainer } from '../atoms';
import { NavWhiteBoxItem } from '../molecules';

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
    <WhiteContainer>
      <label className="w-full text-gray6 body1-regular">{label}</label>
      {list.map((navItem, index) => (
        <NavWhiteBoxItem key={index} {...navItem} />
      ))}
    </WhiteContainer>
  );
};

export default NavWhiteBox;
