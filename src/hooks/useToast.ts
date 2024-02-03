import type { ToastType } from '@/stores/toastState';
import { toastState } from '@/stores/toastState';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

const useToast: () => {
  showToast: (message: string, type: ToastType) => void;
  hideToast: (id: string) => void;
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

  const hideToast: (id: string) => void = (id) => {
    setToast((prev) => (prev.id === id ? { ...prev, isOpen: false } : prev));
  };

  return {
    showToast,
    hideToast,
  };
};

export default useToast;
