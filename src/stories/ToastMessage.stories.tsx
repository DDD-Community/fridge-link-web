import { RecoilRoot, useRecoilState } from 'recoil';

import React from 'react';
import { ToastMessage } from '../components/atoms';
import type { ToastType } from '../stores/toastState';
import { toastState } from '../stores/toastState';

export default {
  title: 'ToastMessage',
  component: ToastMessage,
  decorators: [
    (Story: any) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

interface ToastStoryArgs {
  toast: {
    message: string;
    isOpen: boolean;
    type: ToastType;
  };
}

const Template: any = (args: ToastStoryArgs) => {
  const [toast, setToast] = useRecoilState(toastState);

  const handleToggle: () => void = () => {
    setToast((prevToastState) => ({
      ...prevToastState,
      type: args.toast.type,
      message: args.toast.message,
      isOpen: !prevToastState.isOpen,
    }));
  };

  return (
    <div>
      {toast.isOpen && <ToastMessage />}
      <button className="bg-primary2 rounded-[5px] p-[5px]" onClick={handleToggle}>
        토스트띄우기
      </button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  toast: {
    message: '일반 메시지를 띄우기',
    isOpen: true,
    type: 'info',
  },
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  toast: {
    message: '에러 상태 메시지 띄우기',
    isOpen: true,
    type: 'error',
  },
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  toast: {
    message: '성공메시지 띄우기',
    isOpen: true,
    type: 'success',
  },
};
