import React from 'react';

interface GreenButtonProps {
  text: string;
  linkTo: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ text }) => {
  return <button className="">{text}</button>;
};

export default GreenButton;
