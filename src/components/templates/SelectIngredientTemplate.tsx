import type { FridgeData, IngredientDetailType } from '@/types/fridge';
import { Header, SelectFridgeBoard, SelectFridgeModal } from '@/components/organisms';
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { AngleIcon } from '@/assets/icons';
import { Lottie } from '../atoms';
import { useGetMe } from '@/hooks/queries/mypage';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';

const SelectIngredientTemplate: React.FC<{
  setSelectedIngredientInfo: React.Dispatch<React.SetStateAction<IngredientDetailType | undefined>>;
  onCloseSelectIngredient: () => void;
}> = ({ setSelectedIngredientInfo, onCloseSelectIngredient }) => {
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { nickname } = useGetMe();

  const [selectedFridge, setSelectedFridge] = useState<FridgeData>();

  const fridgeList = useGetMyFridgeList();

  useEffect(() => {
    if (!fridgeList) {
      onOpenFridgeListModal();
    }
  }, []);

  useEffect(() => {
    if (!fridgeList || fridgeList.length < 0) {
      return;
    }
    setSelectedFridge(fridgeList[0]);
  }, [fridgeList]);

  if (!fridgeList) {
    return Lottie();
  }

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
          className="bg-white"
          position="fixed"
          bottom="0"
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
          margin={0}
        >
          <ModalBody padding={0}>
            <SelectFridgeModal
              fridgeList={fridgeList}
              selectedFridge={selectedFridge}
              onCloseFridgeListModal={onCloseFridgeListModal}
              setSelectedFridge={setSelectedFridge}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header
          headerTitle={'내 냉장고'}
          headerLeft={
            <button onClick={onCloseSelectIngredient}>
              <AngleIcon fill={'#363A45'} />
            </button>
          }
        />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <div className="flex justify-between items-end mb-[28px]">
            <div className="flex flex-col gap-[12px]">
              <div className="body1-medium text-gray7">{nickname} 님의</div>
              <div className="flex items-center gap-[8px]" onClick={onOpenFridgeListModal}>
                <div className="heading1-bold">{selectedFridge?.name}</div>
                <AngleIcon width={16} height={16} fill="#000000" transform="rotate(-90)" />
              </div>
            </div>
          </div>
          <SelectFridgeBoard
            fridgeId={selectedFridge?.id}
            setSelectedIngredientInfo={setSelectedIngredientInfo}
            onCloseSelectIngredient={onCloseSelectIngredient}
          />
        </section>
      </div>
    </>
  );
};

export default SelectIngredientTemplate;
