import { Button } from '@/components/atoms';
import { MyFridgeInfo } from '@/components/molecules';
import { NavWhiteBox } from '@/components/organisms';
import SettingSVG from '@/assets/my/setting.svg';
import NotificationSVG from '@/assets/my/notification (2).svg';
import FriendsSVG from '@/assets/my/friends.svg';
import CartSVG from '@/assets/my/cart.svg';
import QuestionSVG from '@/assets/my/question.svg';
import PolicySVG from '@/assets/my/POLICY.svg';
import InfoSVG from '@/assets/my/INFO.svg';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import React from 'react';

const GENERAGE_NAV_LIST = [
  { name: '계정 설정', svgComponent: <SettingSVG />, linkTo: '' },
  { name: '알림 설정', svgComponent: <NotificationSVG />, linkTo: '' },
  { name: '친구', svgComponent: <FriendsSVG />, linkTo: '' },
  { name: '나눔 내역', svgComponent: <CartSVG />, linkTo: '' },
];

const ETC_NAV_LIST = [
  { name: '문의', svgComponent: <QuestionSVG />, linkTo: '' },
  { name: '약관 및 정책', svgComponent: <PolicySVG />, linkTo: '' },
  { name: '버전정보', svgComponent: <InfoSVG />, linkTo: '', text: '1.0.1' },
];

const Mypage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'My'} />
      <section
        className={`flex flex-col gap-[20px] min-h-screen p-20 bg-gray1`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-[15px]">
            <div>이미지</div>
            <div className="heading2-semibold">닉네임</div>
          </div>
          <Button
            text="프로필 수정"
            className="bg-white text-black rounded-[30px] p-[10px]"
          />
        </div>
        <div className="flex justify-evenly bg-gray6 rounded-[12px]">
          <MyFridgeInfo label="식자재" value="34개" />
          <MyFridgeInfo label="나눔" value="3개" />
          <MyFridgeInfo label="친구" value="5명" />
        </div>
        <NavWhiteBox label="일반" list={GENERAGE_NAV_LIST} />
        <NavWhiteBox label="기타" list={ETC_NAV_LIST} />
      </section>
    </div>
  );
};

export default Mypage;
