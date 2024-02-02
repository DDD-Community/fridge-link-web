import { toastState } from '@/stores/toastState';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const ToastMessage: React.FC = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const closeToast: () => void = () => {
    setToast((prev) => ({ ...prev, isOpen: false }));
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
    <div className="fixed bottom-[90px] left-[20px] right-[20px] p-[16px] rounded-[12px] text-center text-white body1-regular bg-black bg-opacity-70">
      {toast.message}
    </div>
  );
};

export default ToastMessage;
