import { Container } from '../atoms';
import { NavWhiteBoxItem } from '../molecules';
import React from 'react';

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
    <Container className="bg-white">
      <label className="w-full text-gray6 body1-regular">{label}</label>
      {list.map((navItem, index) => (
        <NavWhiteBoxItem key={index} {...navItem} />
      ))}
    </Container>
  );
};

export default NavWhiteBox;
