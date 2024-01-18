import React, { useEffect } from 'react';

interface ToastMessageProps {
  text: string;
  toggleHandler: () => void;
}
const ToastMessage: React.FC<ToastMessageProps> = ({ text, toggleHandler }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleHandler();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-[90px] left-[20px] right-[20px] p-[16px] rounded-[12px] text-center text-white body1-regular bg-black bg-opacity-70">
      {text}
    </div>
  );
};

export default ToastMessage;
