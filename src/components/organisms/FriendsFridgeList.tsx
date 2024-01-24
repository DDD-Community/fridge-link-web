import React from 'react';
import { SearchInput, WhiteBox } from '../atoms';
import { FriendsFridgeItem } from '../molecules';
import { AllowBottom } from '../atoms/Icon';

const FriendsFridgeList: React.FC<{
  toggleIsOpenOrderListModal: () => void;
}> = ({ toggleIsOpenOrderListModal }) => {
  return (
    <div className="mt-[37px]">
      <div className="mb-[19.5px] flex justify-between">
        <div className="heading2-semibold text-gray8">
          친구 목록<span className="heading2-bold text-primary3">13</span>
        </div>
        <div
          className="flex items-center gap-[6px]"
          onClick={toggleIsOpenOrderListModal}
        >
          <div>등록순</div>
          <AllowBottom />
        </div>
      </div>
      <WhiteBox>
        <SearchInput placeholder="친구의 이름을 입력하세요" />
        <div className="w-full flex flex-col gap-[24px]">
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
        </div>
      </WhiteBox>
    </div>
  );
};

export default FriendsFridgeList;
