import React from 'react';
import { GreenArrowButton, WhiteBox } from '../atoms';

const FriendsRecentBoard: React.FC = () => {
  return (
    <WhiteBox className="flex">
      <div className="text-primary2 body2-semibold">최신근황</div>
      <div className="text-center text-gray8">
        김지수님이
        <br />
        토마토를 추가했어요!
      </div>
      <div className="text-gray6 body2-medium">
        그밖에 신선한 재료를 구경할 수 있어요.
      </div>
      <div className="flex w-full justify-center gap-[6px]">
        <div className="">고기</div>
        <div>고기</div>
      </div>
      <GreenArrowButton className="bg-primary2" text="친구 냉장고 보러가기" />
    </WhiteBox>
  );
};

export default FriendsRecentBoard;
