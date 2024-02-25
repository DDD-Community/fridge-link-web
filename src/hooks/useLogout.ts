import { useRouter } from 'next/router';

const useLogout = () => {
  const router = useRouter();
  return () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/login');
  };
};

export default useLogout;
