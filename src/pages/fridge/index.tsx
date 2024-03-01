import Header from '@/components/organisms/Header';
import { FridgeBoard, FridgeInfoBox, FridgeListModal } from '@/components/organisms';
import { type NextPage } from 'next';
import { Modal, ModalOverlay, ModalBody, ModalContent, useDisclosure } from '@chakra-ui/react';
import { useGetMe } from '@/hooks/queries/mypage';
import { useEffect, useState } from 'react';
import withLogin from '@/components/templates/withLogin';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';
import type { CurrentFridgeInfoType } from '@/types/fridge';
import { useRouter } from 'next/router';
import { EmptyBox } from '@/components/molecules';

const FridgePage: NextPage = () => {
  const router = useRouter();
  const [currentFridgeInfo, setCurrentFridgeInfo] = useState<CurrentFridgeInfoType>({
    username: null,
    fridgeId: 0,
    fridgeName: '냉장고정보없음',
  });
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const fridgeList = useGetMyFridgeList();
  const { nickname } = useGetMe();

  const { fridgeid, name } = router.query;

  useEffect(() => {
    if (!fridgeList || fridgeList.length === 0 || !currentFridgeInfo) {
      onOpenFridgeListModal();
      return;
    }
    if (fridgeid) {
      setCurrentFridgeInfo({ username: null, fridgeId: Number(fridgeid), fridgeName: name as string });
      return;
    }
    setCurrentFridgeInfo({ username: null, fridgeId: fridgeList[0].id, fridgeName: fridgeList[0].name });
  }, [fridgeList]);

  const handleCurrentFridgeInfo = (id: number, name: string) => {
    setCurrentFridgeInfo((prev) => ({ ...prev, fridgeId: id, fridgeName: name }));
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
          className="bg-white"
          position="fixed"
          bottom="0"
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
          margin={0}
        >
          <ModalBody padding={0}>
            <FridgeListModal
              handleCurrentFridgeInfo={handleCurrentFridgeInfo}
              onCloseFridgeListModal={onCloseFridgeListModal}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'내 냉장고'} />
        <section className={`flex flex-col min-h-screen p-0 pl-20 pr-20 pb-20 bg-gray1`}>
          <FridgeInfoBox
            currentFridgeInfo={currentFridgeInfo}
            userName={nickname}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
            isOkIngredientAdd={true}
          />
          {!fridgeList || fridgeList.length === 0 ? (
            <div>
              <EmptyBox text={`냉장칸에 추가된 식자재가 없어요!`} />
            </div>
          ) : (
            <FridgeBoard currentFridgeInfo={currentFridgeInfo} />
          )}
        </section>
      </div>
    </>
  );
};
export default withLogin(FridgePage);
