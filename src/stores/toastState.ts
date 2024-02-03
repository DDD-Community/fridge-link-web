import { atom } from 'recoil';

export type ToastType = 'info' | 'success' | 'error';

export interface ToastState {
  message: string;
  isOpen: boolean;
  type: ToastType;
  id: string;
}

export const toastState = atom<ToastState>({
  key: 'toastState',
  default: {
    id: '',
    message: '',
    isOpen: false,
    type: 'success',
  },
});
