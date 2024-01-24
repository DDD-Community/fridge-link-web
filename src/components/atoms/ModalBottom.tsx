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
        className="w-full max-w-[480px] min-h-[500px] pt-[40px] mb-[-24px] bg-white p-[20px] rounded-[24px]"
        onClick={handleWhiteContentClick}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalBox;
