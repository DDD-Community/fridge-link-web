import { FridgeBoard, FridgeInfoBox, FridgeListModal } from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import { Modal, ModalOverlay, ModalBody, ModalContent, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';
import type { CurrentFridgeInfoType } from '@/types/fridge';

const FriendIdPage: NextPage = () => {
  const router = useRouter();
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { id: userId, name: username } = router.query;

  const [currentFridgeInfo, setCurrentFridgeInfo] = useState<CurrentFridgeInfoType>({
    username: username as string,
    fridgeId: 0,
    fridgeName: '',
  });

  const fridgeList = useGetMyFridgeList(Number(userId));

  const handleCurrentFridgeInfo = (id: number, name: string) => {
    setCurrentFridgeInfo((prev) => ({ ...prev, fridgeId: id, fridgeName: name }));
  };

  useEffect(() => {
    if (!fridgeList || fridgeList.length < 0) {
      return;
    }
    handleCurrentFridgeInfo(fridgeList[0].id, fridgeList[0].name);
  }, [fridgeList]);

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
              ownerId={Number(userId)}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'친구 냉장고'} />
        <section className={`flex flex-col min-h-screen p-0 pl-20 pr-20 pb-20 bg-gray1`}>
          <FridgeInfoBox
            userName={username as string}
            currentFridgeInfo={currentFridgeInfo}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
          />
          <FridgeBoard currentFridgeInfo={currentFridgeInfo} />
        </section>
      </div>
    </>
  );
};
export default FriendIdPage;
