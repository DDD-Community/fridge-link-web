import { AddFriendTemplate, FriendListTemplate } from '@/components/templates';

import FriendshipHeaderSettingButton from '@/components/molecules/FriendshipHeaderSettingButton';
import Header from '@/components/organisms/Header';
import type { NextPage } from 'next';
import { TabButton } from '@/components/atoms';
import type { TabLabel } from '@/types/common';
import { useState } from 'react';

const TABS: TabLabel[] = [
  { label: '친구 목록', value: 'list' },
  { label: '친구 추가', value: 'add' },
];

const FriendShipPage: NextPage = () => {
  const [curTab, setCurTab] = useState<TabLabel>(TABS[0]);
  const [possibleDelete, setPossibleDelete] = useState<boolean>(false);

  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header
        headerTitle={'친구'}
        headerRight={
          <FriendshipHeaderSettingButton
            onClick={() => {
              setPossibleDelete(!possibleDelete);
            }}
          />
        }
        backgroundColor="white"
      />
      <div className="fixed w-screen max-w-[480px] z-10">
        <div className="flex px-[20px] bg-white">
          {TABS.map((ele: TabLabel) => (
            <TabButton
              key={ele.value}
              onClick={() => {
                setCurTab(ele);
              }}
              active={ele.value === curTab.value}
              label={ele.label}
            />
          ))}
        </div>
      </div>

      {curTab.value === 'list' ? <FriendListTemplate possibleDelete={possibleDelete} /> : <AddFriendTemplate />}
    </div>
  );
};
export default FriendShipPage;
