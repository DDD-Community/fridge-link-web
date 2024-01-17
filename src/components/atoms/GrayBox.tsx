import React from 'react';

interface GrayBoxProps {
  children: React.ReactNode;
}

const GrayBox: React.FC<GrayBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-start bg-[#F5F6F7] gap-22 p-[16px] w-full bg-white rounded-12">
      {children}
    </div>
  );
};

export default GrayBox;
