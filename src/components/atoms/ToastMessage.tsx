import { toastState } from '@/stores/toastState';
import type { ToastType } from '@/stores/toastState';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const ToastMessage: React.FC = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const getBackgroundColor = (type: ToastType): string => {
    switch (type) {
      case 'info':
        return 'bg-black bg-opacity-70';
      case 'success':
        return 'bg-black bg-opacity-70';
      case 'error':
        return 'bg-point4 bg-opacity-70';
      default:
        return 'bg-black bg-opacity-70';
    }
  };

  const closeToast: () => void = () => {
    setToast((prevToast) => ({ ...prevToast, isOpen: false }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[90px] left-[20px] right-[20px] p-[16px] rounded-[12px] text-center text-white body1-regular ${getBackgroundColor(toast.type)}`}
    >
      {toast.message}
    </div>
  );
};

export default ToastMessage;
