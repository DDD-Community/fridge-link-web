import React from 'react';

interface ModalBoxProps {
  children: React.ReactNode;
  blackClickHandler: () => void;
}

const ModalBox: React.FC<ModalBoxProps> = ({ children, blackClickHandler }) => {
  const handleWhiteContentClick: (e: React.MouseEvent) => void = (e) => {
    if (e.target === e.currentTarget) {
      blackClickHandler();
    }
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 z-[9999]"
      onClick={blackClickHandler}
    >
      <div
        className="w-full max-w-[480px] pt-[40px] mb-[-24px] bg-white p-[20px] pb-[40px] rounded-[24px]"
        onClick={handleWhiteContentClick}
      >
        <div className="relative">
          <div className="absolute top-[-16px] right-[200px] left-[200px] h-[4px] bg-gray-500 rounded-[100px]"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalBox;
