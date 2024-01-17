import React from 'react';

interface WhiteBoxProps {
  children: React.ReactNode;
  className?: string;
}

const WhiteBox: React.FC<WhiteBoxProps> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-22 p-32 w-full bg-white rounded-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default WhiteBox;
