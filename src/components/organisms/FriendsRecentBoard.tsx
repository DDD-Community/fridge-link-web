import React from 'react';
import { Button, WhiteBox } from '../atoms';

const FriendsRecentBoard: React.FC = () => {
  return (
    <WhiteBox className="flex">
      <div>최신근황</div>
      <div>
        <div>김지수님이</div>
        <div>토마토를 추가했어요!</div>
      </div>
      <div>그밖에 신선한 재료를 구경할 수 있어요.</div>
      <div className="flex">
        <div>고기</div>
        <div>고기</div>
        <div>고기</div>
        <div>고기</div>
      </div>
      <Button className="bg-primary2" text="친구 냉장고 보러가기" />
    </WhiteBox>
  );
};

export default FriendsRecentBoard;
