import { SettingIcon } from '@/assets/icons';
import { TabButton } from '@/components/atoms';
import Header from '@/components/organisms/Header';
import { AddFriendTemplate, FriendListTemplate } from '@/components/templates';
import { type TabLabel } from '@/types/common';

import { type NextPage } from 'next';
import { useState } from 'react';

const TABS: TabLabel[] = [
  { label: '친구 목록', value: 'list' },
  { label: '친구 추가', value: 'add' },
];

const FriendsListPage: NextPage = () => {
  const [curTab, setCurTab] = useState<TabLabel>(TABS[0]);

  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header
        headerTitle={'친구'}
        headerRight={<SettingIcon />}
        backgroundColor="white"
      />
      <div className="fixed w-screen max-w-[480px]">
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

      {curTab.value === 'list' ? <FriendListTemplate /> : <AddFriendTemplate />}
    </div>
  );
};
export default FriendsListPage;
