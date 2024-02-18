import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const withLogin = (InnerComponent: React.FC) => {
  return () => {
    const router = useRouter();
    const token = localStorage.getItem('accessToken');

    const redirectToLogin: () => Promise<void> = async () => {
      if (!token) {
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
