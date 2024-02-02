import React from 'react';
import BottomNavigation from '../organisms/BottomNavigation';
import { usePathname } from 'next/navigation';
import { ToastMessage } from '../atoms';
import { useRecoilValue } from 'recoil';
import { toastState } from '@/stores/toastState';

const MAIN_PAGE_PATHS = ['/home', '/fridge', '/share', '/mypage'];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen } = useRecoilValue(toastState);

  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center bg-gray2">
      <div className="flex-col w-[100vw] max-w-[480px] min-h-[100vh] bg-gray1 ">
        {children}
        {isOpen && <ToastMessage />}
        {MAIN_PAGE_PATHS.includes(pathname) ? <BottomNavigation /> : null}
      </div>
    </div>
  );
};

export default Layout;
