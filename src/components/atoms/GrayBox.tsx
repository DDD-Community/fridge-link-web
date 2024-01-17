import React from 'react';

interface GrayBoxProps {
  children: React.ReactNode;
}

const GrayBox: React.FC<GrayBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-22 p-32 w-full bg-white rounded-12">
      {children}
    </div>
  );
};

export default GrayBox;
