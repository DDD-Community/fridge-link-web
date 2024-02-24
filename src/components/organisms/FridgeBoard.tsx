import React, { useState } from 'react';
import { Container } from '@/components/atoms';
import { EmptyBox, FridgeTab, IngredientItemBox } from '@/components/molecules';
import { IngredientModal } from '.';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import { useGetFridgeContentById } from '@/hooks/queries/fridge';

const FridgeBoard: React.FC<{ fridgeId: number }> = ({ fridgeId }) => {
  const [detailIngredientId, setDetailIngredientId] = useState(0);
  const [currentTabName, setCurrentTabName] = useState<'냉장' | '냉동'>('냉장');

  const data = useGetFridgeContentById(
    Number(fridgeId),
    currentTabName === '냉장' ? 'FREEZING' : 'REFRIGERATION',
  )?.content;

  const {
    isOpen: isOpenIngredientModal,
    onOpen: onOpenIngredientModal,
    onClose: onCloseIngredientModal,
  } = useDisclosure();

  const handleTabNameChange: (tabName: '냉장' | '냉동') => void = (tabName) => {
    setCurrentTabName(tabName);
  };

  const handleDetailIngreditentId = (id: number) => {
    setDetailIngredientId(id);
    onOpenIngredientModal();
  };

  return (
    <>
      {isOpenIngredientModal && (
        <Modal
          onClose={onCloseIngredientModal}
          isOpen={isOpenIngredientModal}
          motionPreset="slideInBottom"
          trapFocus={false}
        >
          <ModalOverlay height="100vh" onClick={onCloseIngredientModal} />
          <ModalContent
            className="bg-white"
            position="fixed"
            bottom="0"
            borderRadius="24px 24px 0px 0px"
            maxW="lg"
            margin={0}
          >
            <ModalBody padding={0}>
              <IngredientModal
                isDetailModal
                id={detailIngredientId}
                toggleIsOpenIngredientModal={onCloseIngredientModal}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <Container className="p-[20px] bg-white">
        <FridgeTab
          currentTabName={currentTabName}
          handleTabNameChange={handleTabNameChange}
        />
        {data && data.length !== 0 ? (
          <div className="flex flex-col w-full gap-[24px]">
            {data.map((ingredient) => (
              <IngredientItemBox
                key={ingredient.ingredientDetailId}
                data={ingredient}
                handleDetailIngreditentId={handleDetailIngreditentId}
              />
            ))}
          </div>
        ) : (
          <div>
            <EmptyBox text={`${currentTabName}칸에 추가된 식자재가 없어요!`} />
          </div>
        )}
      </Container>
    </>
  );
};

export default FridgeBoard;
