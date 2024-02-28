import Link from 'next/link';
import React from 'react';

interface FridgeEnterButtonProps {
  svgComponent: React.ReactNode;
  text: string;
  linkTo: string;
}

const FridgeEnterButton: React.FC<FridgeEnterButtonProps> = ({ svgComponent, text, linkTo }) => {
  return (
    <Link href={linkTo}>
      {svgComponent}
      <p>{text}</p>
    </Link>
  );
};

export default FridgeEnterButton;
