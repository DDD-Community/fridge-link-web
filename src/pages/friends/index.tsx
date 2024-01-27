import {
  FriendsFridgeList,
  FriendsRecentBoard,
  OrderListModal,
} from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import { useState } from 'react';

const FriendsPage: NextPage = () => {
  const [isOpenOrderListModal, setIsOpenOrderListModal] = useState(false);

  const toggleIsOpenOrderListModal: () => void = () => {
    setIsOpenOrderListModal((prev) => !prev);
  };

  return (
    <>
      {isOpenOrderListModal && (
        <OrderListModal
          currentOrder={'등록순'}
          toggleIsOpenOrderListModal={toggleIsOpenOrderListModal}
        />
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'친구 냉장고'} />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <FriendsRecentBoard />
          <FriendsFridgeList
            toggleIsOpenOrderListModal={toggleIsOpenOrderListModal}
          />
        </section>
      </div>
    </>
  );
};
export default FriendsPage;
