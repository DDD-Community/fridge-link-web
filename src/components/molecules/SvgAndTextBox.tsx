import React from 'react';
import Link from 'next/link';
import WhiteBox from '@/components/atoms/WhiteBox';

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
      <WhiteBox>
        {svgComponent}
        <p className="heading4-semibold text-gray6">{text}</p>
      </WhiteBox>
    </Link>
  );
};

export default SvgAndTextBox;
