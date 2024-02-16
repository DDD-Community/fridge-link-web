import Header from '@/components/organisms/Header';
import {
  FridgeBoard,
  FridgeInfoBox,
  FridgeListModal,
  IngredientAddModal,
} from '@/components/organisms';
import { type NextPage } from 'next';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
// import { useGetIngredientList } from '@/hooks/queries/fridge';

const FridgePage: NextPage = () => {
  const [isOpenIngredientAddModal, setIsOpenIngredientAddModal] =
    useState(false);

  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();
  // const data = useGetIngredientList();
  // console.log('받아올 데이터', data);

  const toggleIsOpenIngredientAddModal: () => void = () => {
    setIsOpenIngredientAddModal((prev) => !prev);
  };

  return (
    <>
      <Modal
        onClose={onCloseFridgeListModal}
        isOpen={isOpenFridgeListModal}
        motionPreset="slideInBottom"
        trapFocus={false}
      >
        <ModalOverlay height="100vh" onClick={onCloseFridgeListModal} />
        <ModalContent
          className="bg-white p-[20px]"
          position="fixed"
          bottom="0"
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
          margin={0}
        >
          <ModalBody padding={0}>
            <FridgeListModal
              toggleIsOpenFridgeListModal={onCloseFridgeListModal}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {isOpenIngredientAddModal && (
        <IngredientAddModal
          toggleIsOpenIngredientAddModal={toggleIsOpenIngredientAddModal}
        />
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'내 냉장고'} />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <FridgeInfoBox
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
            toggleIsOpenIngredientAddModal={toggleIsOpenIngredientAddModal}
          />
          <FridgeBoard />
        </section>
      </div>
    </>
  );
};
export default FridgePage;
