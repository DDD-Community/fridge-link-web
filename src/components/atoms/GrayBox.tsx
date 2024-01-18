import React from 'react';

interface GrayBoxProps {
  children: React.ReactNode;
  className?: string;
}

const GrayBox: React.FC<GrayBoxProps> = ({ children, className }) => {
  return (
    <div
      className={`flex ${className ?? 'flex-col'} justify-center items-start bg-[#F5F6F7] gap-22 p-[16px] w-full bg-[#F5F6F7] rounded-12`}
    >
      {children}
    </div>
  );
};

export default GrayBox;
