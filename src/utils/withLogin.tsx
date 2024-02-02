import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { emailState } from '@/stores/userState';
import { useRecoilValue } from 'recoil';

const withLogin = (InnerComponent: React.FC) => {
  return () => {
    const router = useRouter();
    const userEmail = useRecoilValue(emailState);

    const redirectToLogin: () => Promise<void> = async () => {
      if (!userEmail) {
        alert('로그인이 필요합니다.');
        try {
          await router.push('/login');
        } catch (error) {
          console.error('로그인 체크 에러', error);
        }
      }
    };

    useEffect(() => {
      void redirectToLogin();
    }, [userEmail]);

    return userEmail ? <InnerComponent /> : null;
  };
};

export default withLogin;
