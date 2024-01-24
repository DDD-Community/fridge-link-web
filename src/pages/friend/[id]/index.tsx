import {
  FridgeBoard,
  FridgeInfoBox,
  FridgeListModal,
} from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import { useState } from 'react';

const FriendIdPage: NextPage = () => {
  const [isOpenFridgeListModal, setIsOpenFridgeListModal] = useState(false);

  const toggleIsOpenFridgeListModal: () => void = () => {
    setIsOpenFridgeListModal((prev) => !prev);
  };

  return (
    <>
      {isOpenFridgeListModal && (
        <FridgeListModal
          isMyFridgeList
          toggleIsOpenFridgeListModal={toggleIsOpenFridgeListModal}
        />
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'친구 냉장고'} />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <FridgeInfoBox
            toggleIsOpenFridgeListModal={toggleIsOpenFridgeListModal}
          />
          <FridgeBoard />
        </section>
      </div>
    </>
  );
};
export default FriendIdPage;
