import { atom } from 'recoil';

export type ToastType = 'info' | 'success' | 'error';

export interface ToastState {
  message: string;
  isOpen: boolean;
  type: ToastType;
}

export const toastState = atom<ToastState>({
  key: 'toastState',
  default: {
    message: '',
    isOpen: false,
    type: 'success',
  },
});
