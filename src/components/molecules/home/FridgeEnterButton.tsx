import React from 'react';
import Link from 'next/link';
import WhiteBox from '@/components/atoms/WhiteBox';

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
    <Link className="w-full" href={linkTo}>
      <WhiteBox>
        {svgComponent}
        <p>{text}</p>
      </WhiteBox>
    </Link>
  );
};

export default FridgeEnterButton;
