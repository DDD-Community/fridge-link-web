import React from 'react';

interface GreenButtonProps {
  text: string;
  handler?: () => void;
  className: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-primary2 text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default GreenButton;
