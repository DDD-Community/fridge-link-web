import React from 'react';
import BottomNavigation from '../organisms/BottomNavigation';
import { usePathname } from 'next/navigation';

const MAIN_PAGE_PATHS = ['/home', '/fridge', '/share', '/mypage'];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center bg-gray2">
      <div className="flex-col w-[100vw] max-w-[480px] min-h-[100vh] bg-gray1 ">
        {children}
        {MAIN_PAGE_PATHS.includes(pathname) ? <BottomNavigation /> : null}
      </div>
    </div>
  );
};

export default Layout;
