import React from 'react';
import Link from 'next/link';

interface LayoutButtonProps {
  isActive: boolean;
  svgComponent: React.ReactNode;
  text: string;
  linkTo: string;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({
  isActive,
  svgComponent,
  text,
  linkTo,
}) => {
  return (
    <Link className={isActive ? '' : ''} href={linkTo}>
      {svgComponent}
      <p>{text}</p>
    </Link>
  );
};

export default LayoutButton;
