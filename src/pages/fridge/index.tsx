import Header from '@/components/organisms/Header';
import {
  FridgeBoard,
  FridgeInfoBox,
  FridgeListModal,
  IngredientAddModal,
} from '@/components/organisms';
import { type NextPage } from 'next';
import { useState } from 'react';
import { ToastMessage } from '@/components/atoms';

const FridgePage: NextPage = () => {
  const [isOpenIngredientAddModal, setIsOpenIngredientAddModal] =
    useState(false);
  const [isOpenFridgeListModal, setIsOpenFridgeListModal] = useState(false);
  const [isOpenToastMessage, setIsOpenToastMessage] = useState(false);

  const toggleIsOppenToastMessage: () => void = () => {
    setIsOpenToastMessage((prev) => !prev);
  };

  const toggleIsOpenIngredientAddModal: () => void = () => {
    setIsOpenIngredientAddModal((prev) => !prev);
  };

  const toggleIsOpenFridgeListModal: () => void = () => {
    setIsOpenFridgeListModal((prev) => !prev);
  };

  return (
    <>
      {isOpenFridgeListModal && (
        <FridgeListModal
          toggleIsOpenFridgeListModal={toggleIsOpenFridgeListModal}
        />
      )}
      {isOpenToastMessage && (
        <ToastMessage
          text="식자재 추가가 완료되었습니다."
          toggleHandler={toggleIsOppenToastMessage}
        />
      )}
      {isOpenIngredientAddModal && (
        <IngredientAddModal
          toggleIsOppenToastMessage={toggleIsOppenToastMessage}
          toggleIsOpenIngredientAddModal={toggleIsOpenIngredientAddModal}
        />
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'내 냉장고'} />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <FridgeInfoBox
            toggleIsOpenFridgeListModal={toggleIsOpenFridgeListModal}
            toggleIsOpenIngredientAddModal={toggleIsOpenIngredientAddModal}
          />
          <FridgeBoard />
        </section>
      </div>
    </>
  );
};
export default FridgePage;
