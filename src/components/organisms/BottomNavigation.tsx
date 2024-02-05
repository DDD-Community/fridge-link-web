import { FridgeIcon, HomeIcon, MypageIcon, ShareIcon } from '@/assets/icons';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const BOTTOM_TABS = [
  {
    label: '홈',
    icon: HomeIcon,
    href: '/home',
  },
  {
    label: '내냉장고',
    icon: FridgeIcon,
    href: '/fridge',
  },
  {
    label: '나눔',
    icon: ShareIcon,
    href: '/share',
  },
  {
    label: 'My',
    icon: MypageIcon,
    href: '/mypage',
  },
];

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="min-h-[72px]">
      <div className="flex fixed h-[72px] justify-between px-[27px]  bottom-0 w-full bg-white max-w-[480px] ">
        {BOTTOM_TABS.map((ele) => (
          <Link
            key={ele.label}
            href={ele.href}
            className="w-[80px] text-center justify-center pt-[12px] pb-[24px]"
          >
            <div className="flex justify-center">
              <ele.icon fill={pathname === ele.href ? '#0C5E5A' : '#CCCFD7'} />
            </div>
            <p
              className={`mt-[4px] body2-semibold ${pathname === ele.href ? 'text-primary3' : 'text-gray3'}`}
            >
              {ele.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
