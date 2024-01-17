import Header from '@/components/organisms/Header';
import {
  FridgeBoard,
  FridgeInfoBox,
  IngredientAddModal,
} from '@/components/organisms';
import { type NextPage } from 'next';
import { useState } from 'react';

const FridgePage: NextPage = () => {
  const [isOpenIngredientAddModal, setIsOpenIngredientAddModal] =
    useState(false);

  const toggleIsOpenIngredientAddModal: () => void = () => {
    setIsOpenIngredientAddModal((prev) => !prev);
  };
  return (
    <>
      {isOpenIngredientAddModal && (
        <IngredientAddModal
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
