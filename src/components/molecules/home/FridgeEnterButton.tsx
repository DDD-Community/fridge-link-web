import React from 'react';
import Link from 'next/link';

interface FridgeEnterButtonProps {
  svgComponent: React.ReactNode;
  text: string;
  linkTo: string;
}

const FridgeEnterButton: React.FC<FridgeEnterButtonProps> = ({
  svgComponent,
  text,
  linkTo,
}) => {
  return (
    <Link href={linkTo}>
      {svgComponent}
      <p>{text}</p>
    </Link>
  );
};

export default FridgeEnterButton;
