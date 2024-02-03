import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const withLogin = (InnerComponent: React.FC) => {
  return () => {
    const router = useRouter();
    const token = localStorage.getItem('token');

    const redirectToLogin: () => Promise<void> = async () => {
      if (!token) {
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
    }, [token]);

    return token ? <InnerComponent /> : null;
  };
};

export default withLogin;
