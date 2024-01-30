import React from 'react';
import Link from 'next/link';
import { WhiteContainer } from '@/components/atoms';

interface SvgAndTextBoxProps {
  svgComponent: React.ReactNode;
  text: string;
  linkTo: string;
}

const SvgAndTextBox: React.FC<SvgAndTextBoxProps> = ({
  svgComponent,
  text,
  linkTo,
}) => {
  return (
    <Link className="w-full" href={linkTo}>
      <WhiteContainer>
        {svgComponent}
        <p className="heading4-semibold text-gray6">{text}</p>
      </WhiteContainer>
    </Link>
  );
};

export default SvgAndTextBox;
