import React, { useRef, useState } from 'react';
import { Container, Lottie } from '@/components/atoms';
import { EmptyBox, FridgeTab, IngredientItemBox } from '@/components/molecules';
import { IngredientModal } from '.';
import { Modal, ModalOverlay, ModalBody, ModalContent, useDisclosure } from '@chakra-ui/react';
import { useGetFridgeContentById } from '@/hooks/queries/fridge';
import { useObserver } from '@/hooks/useObserver';
import { useRouter } from 'next/router';

const FridgeBoard: React.FC = () => {
  const bottom = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [detailIngredientId, setDetailIngredientId] = useState(0);
  const [currentTabName, setCurrentTabName] = useState<'냉장' | '냉동'>('냉장');
  const { fridgeid: fridgeId, username } = router.query;

  const {
    data: ingredients,
    fetchNextPage: fetchIngredientNextPage,
    isFetchingNextPage: isFetchingIngredientNextPage,
    refetch: ingredientsRefetch,
  } = useGetFridgeContentById({
    id: Number(fridgeId),
    sort: currentTabName === '냉장' ? 'FREEZING' : 'REFRIGERATION',
  });

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

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void fetchIngredientNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <>
      {!username && isOpenIngredientModal && (
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
                ingredientsRefetch={ingredientsRefetch}
                toggleIsOpenIngredientModal={onCloseIngredientModal}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <Container className="p-[20px] bg-white">
        <FridgeTab currentTabName={currentTabName} handleTabNameChange={handleTabNameChange} />
        <div className="flex flex-col w-full gap-[24px]">
          {ingredients?.pages.map(({ content }) =>
            content && content.length > 0 ? (
              content.map((ingredient) => (
                <IngredientItemBox
                  key={ingredient.ingredientDetailId}
                  data={ingredient}
                  handleDetailIngreditentId={handleDetailIngreditentId}
                />
              ))
            ) : (
              <div>
                <EmptyBox text={`${currentTabName}칸에 추가된 식자재가 없어요!`} />
              </div>
            ),
          )}
          {isFetchingIngredientNextPage ? <Lottie /> : <div ref={bottom} />}
        </div>
      </Container>
    </>
  );
};

export default FridgeBoard;
