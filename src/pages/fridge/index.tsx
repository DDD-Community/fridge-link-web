import Header from '@/components/organisms/Header';
import {
  FridgeBoard,
  FridgeInfoBox,
  IngredientAddModal,
} from '@/components/organisms';
import { type NextPage } from 'next';
import { useState } from 'react';
import { ToastMessage } from '@/components/atoms';

const FridgePage: NextPage = () => {
  const [isOpenIngredientAddModal, setIsOpenIngredientAddModal] =
    useState(false);
  const [isOpenToastMessage, setIsOpenToastMessage] = useState(false);

  const toggleIsOppenToastMessage: () => void = () => {
    setIsOpenToastMessage((prev) => !prev);
  };

  const toggleIsOpenIngredientAddModal: () => void = () => {
    setIsOpenIngredientAddModal((prev) => !prev);
  };
  return (
    <>
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
            toggleIsOpenIngredientAddModal={toggleIsOpenIngredientAddModal}
          />
          <FridgeBoard />
        </section>
      </div>
    </>
  );
};
export default FridgePage;
