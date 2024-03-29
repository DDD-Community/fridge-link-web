import { Container } from '@/components/atoms';
import Link from 'next/link';
import React from 'react';

interface SvgAndTextBoxProps {
  svgComponent: React.ReactNode;
  text: string;
  linkTo: string;
}

const SvgAndTextBox: React.FC<SvgAndTextBoxProps> = ({ svgComponent, text, linkTo }) => {
  return (
    <Link className="w-full" href={linkTo}>
      <Container className="bg-white">
        {svgComponent}
        <p className="heading4-semibold text-gray6">{text}</p>
      </Container>
    </Link>
  );
};

export default SvgAndTextBox;
