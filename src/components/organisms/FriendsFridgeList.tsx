import { Container } from '../atoms';

import { AngleIcon } from '@/assets/icons';
import { FriendsFridgeItem } from '../molecules';
import React from 'react';
import { useGetMyFriendsCount } from '@/hooks/queries/mypage';

const FriendsFridgeList: React.FC<{
  toggleIsOpenOrderListModal: () => void;
}> = ({ toggleIsOpenOrderListModal }) => {
  const count = useGetMyFriendsCount();
  return (
    <div className="mt-[37px]">
      <div className="mb-[19.5px] flex justify-between">
        <div className="heading2-semibold text-gray8">
          친구 목록 <span className="heading2-bold text-primary3">{count}</span>
        </div>
        <div
          className="flex items-center gap-[6px]"
          onClick={toggleIsOpenOrderListModal}
        >
          <div>등록순</div>
          <AngleIcon
            width={14}
            height={14}
            fill="#9299AA"
            transform="rotate(-90)"
          />
        </div>
      </div>
      <Container className="bg-white">
        <div className="w-full flex flex-col gap-[24px]">
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
        </div>
      </Container>
    </div>
  );
};

export default FriendsFridgeList;
