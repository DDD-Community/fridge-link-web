import type { ToastType } from '@/stores/toastState';
import { toastState } from '@/stores/toastState';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

const useToast: () => {
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
} = () => {
  const [, setToast] = useRecoilState(toastState);

  const showToast: (message: string, type: ToastType) => void = (
    message,
    type,
  ) => {
    const id = uuid();
    setToast({
      id,
      message,
      isOpen: true,
      type,
    });

    setTimeout(() => {
      setToast((prev) => (prev.id === id ? { ...prev, isOpen: false } : prev));
    }, 2000);
  };

  return {
    showToast,
    hideToast: () => {
      setToast((prevToast) => ({ ...prevToast, isOpen: false }));
    },
  };
};

export default useToast;
