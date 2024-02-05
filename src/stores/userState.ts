import { atom } from 'recoil';

export const tokenState = atom({
  key: 'tokenState',
  default: '',
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});
