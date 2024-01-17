import React from 'react';

interface WhiteBoxProps {
  children: React.ReactNode;
}

const WhiteBox: React.FC<WhiteBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-22 p-32 w-full bg-white rounded-12">
      {children}
    </div>
  );
};

export default WhiteBox;
