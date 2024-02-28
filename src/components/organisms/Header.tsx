import React, { useMemo } from 'react';

import { AngleIcon } from '@/assets/icons';
import { useRouter } from 'next/router';

const Header: React.FC<{
  headerLeft?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  headerTitle?: string;
  headerRight?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  backgroundColor?: 'gray1' | 'white' | 'transparent';
}> = ({ headerLeft, headerTitle, headerRight, backgroundColor }) => {
  const router = useRouter();

  const background = useMemo(() => {
    switch (backgroundColor) {
      case 'gray1':
        return 'bg-gray1';
      case 'white':
        return 'bg-white';
      case 'transparent':
        return 'transparent';
      default:
        return 'bg-gray1';
    }
  }, []);

  return (
    <div
      className={`flex ${headerLeft ? 'justify-between' : 'justify-center'} items-center fixed top-0 w-screen max-w-[480px] py-[12px] px-[20px] z-[1000] ${background}`}
    >
      {headerLeft ?? (
        <button
          onClick={() => {
            router.back();
          }}
        >
          <AngleIcon fill={backgroundColor === 'transparent' ? '#FFFFFF' : '#363A45'} />
        </button>
      )}
      {!headerLeft && (
        <div className="flex justify-center text-center w-full">
          <p className="heading3-bold text-gray8 pt-1">{typeof headerTitle === 'string' ? headerTitle : ''}</p>
        </div>
      )}
      {headerRight ?? <div className="w-7" />}
    </div>
  );
};

export default Header;
