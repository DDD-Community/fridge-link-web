import React from 'react';
import { WhiteBox } from '../atoms';
import { FriendsFridgeItem } from '../molecules';

const FriendsFridgeList: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          친구 목록<span>13</span>
        </div>
        <div>등록순</div>
      </div>
      <WhiteBox>
        <div>검색탭</div>
        <div>
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
          <FriendsFridgeItem name="김지수" ingredientCount={13} linkTo="#" />
        </div>
      </WhiteBox>
    </div>
  );
};

export default FriendsFridgeList;
