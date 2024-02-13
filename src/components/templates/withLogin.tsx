import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useToast from '@/hooks/useToast';

const withLogin = (InnerComponent: React.FC) => {
  return () => {
    const router = useRouter();
    const token = localStorage.getItem('token');
    const { showToast } = useToast();

    const redirectToLogin: () => Promise<void> = async () => {
      if (!token) {
        showToast('로그인이 필요합니다.', 'info');
        try {
          await router.push('/login');
        } catch (error) {
          console.error('로그인 체크 에러', error);
        }
      }
    };

    useEffect(() => {
      void redirectToLogin();
    }, [token]);

    return token ? <InnerComponent /> : null;
  };
};

export default withLogin;
