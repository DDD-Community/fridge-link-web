import React from 'react';

interface ModalBoxProps {
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalBoxProps> = ({ children }) => {
  return (
    <div className="p-[20px] pt-[40px]">
      <div className="relative">
        <div className="absolute top-[-16px] right-[200px] left-[200px] h-[4px] bg-gray-500 rounded-[100px]"></div>
      </div>
      {children}
    </div>
  );
};

export default ModalContainer;
