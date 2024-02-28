import { Button } from '@/components/atoms';
import { MyFridgeInfo } from '@/components/molecules';
import { NavWhiteBox } from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CartIcon,
  FriendsIcon,
  InfoIcon,
  NotificationIcon,
  PolicyIcon,
  QuestionIcon,
  SettingIcon,
} from '@/assets/icons';
import { useGetCount, useGetMe } from '@/hooks/queries/mypage';
import { returnProfileImg } from '@/utils/returnProfileImg';
import withLogin from '@/components/templates/withLogin';

const GENERAGE_NAV_LIST = [
  {
    name: '계정 설정',
    svgComponent: <SettingIcon />,
    linkTo: '/mypage/account',
  },
  {
    name: '알림 설정',
    svgComponent: <NotificationIcon />,
    linkTo: '/mypage/notification',
  },
  {
    name: '친구',
    svgComponent: <FriendsIcon />,
    linkTo: '/mypage/friendship',
  },
  { name: '나눔 내역', svgComponent: <CartIcon />, linkTo: '/mypage/share' },
];

const ETC_NAV_LIST = [
  { name: '문의', svgComponent: <QuestionIcon />, linkTo: '#' },
  { name: '약관 및 정책', svgComponent: <PolicyIcon />, linkTo: '#' },
  { name: '버전정보', svgComponent: <InfoIcon />, linkTo: '', text: '1.0.1' },
];

const Mypage: NextPage = () => {
  const data = useGetMe();

  const count = useGetCount();
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'My'} />
      <main className={`flex flex-col gap-[20px] min-h-screen p-20 bg-gray1`}>
        <div className="flex justify-between items-center">
          <div className="flex gap-[15px] items-center">
            {data?.profileImage && (
              <Image src={returnProfileImg(data?.profileImage)} alt="프로필 예시" width={52} height={52} />
            )}
            <span className="heading2-semibold">{data?.nickname ?? '닉네임을 입력해주세요.'}</span>
          </div>
          <Link href="/mypage/profile">
            <Button text="프로필 수정" className="body2-medium w-80px bg-white text-black rounded-[30px] p-[10px]" />
          </Link>
        </div>
        <div className="flex justify-evenly items-center bg-gray6 rounded-[12px]">
          <MyFridgeInfo label="식자재" value={`${count?.ingredientCount}개`} />
          <div className="w-[2px] h-[36px] bg-gray5" />
          <MyFridgeInfo label="나눔" value={`${count?.shareCount}개`} />
          <div className="w-[2px] h-[36px] bg-gray5" />
          <MyFridgeInfo label="친구" value={`${count?.friendCount}명`} isLast />
        </div>
        <NavWhiteBox label="일반" list={GENERAGE_NAV_LIST} />
        <NavWhiteBox label="기타" list={ETC_NAV_LIST} />
      </main>
    </div>
  );
};

export default withLogin(Mypage);
