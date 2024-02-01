import Header from '@/components/organisms/Header';
import {
  FridgeBoard,
  FridgeInfoBox,
  FridgeListModal,
  IngredientAddModal,
} from '@/components/organisms';
import { type NextPage } from 'next';
import { useState } from 'react';

const FridgePage: NextPage = () => {
  const [isOpenIngredientAddModal, setIsOpenIngredientAddModal] =
    useState(false);
  const [isOpenFridgeListModal, setIsOpenFridgeListModal] = useState(false);

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

      {isOpenIngredientAddModal && (
        <IngredientAddModal
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
