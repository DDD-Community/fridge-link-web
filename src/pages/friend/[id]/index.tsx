import { FridgeBoard, FridgeInfoBox, FridgeListModal } from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import { Modal, ModalOverlay, ModalBody, ModalContent, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';
const FriendIdPage: NextPage = () => {
  const router = useRouter();
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { id: userId, fridgeid: fridgeId, username } = router.query;

  const fridgeList = useGetMyFridgeList(Number(userId));

  useEffect(() => {
    if (!fridgeList || fridgeList.length < 0) {
      return;
    }
    if (!fridgeId) {
      router.push(
        `/friend/${userId as string}?fridgeid=${fridgeList[0].id}&username=${username as string}&name=${fridgeList[0].name}`,
      );
    }
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
            <FridgeListModal onCloseFridgeListModal={onCloseFridgeListModal} ownerId={Number(userId)} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'친구 냉장고'} />
        <section className={`flex flex-col min-h-screen p-0 pl-20 pr-20 pb-20 bg-gray1`}>
          <FridgeInfoBox userName={username as string} toggleIsOpenFridgeListModal={onOpenFridgeListModal} />
          <FridgeBoard />
        </section>
      </div>
    </>
  );
};
export default FriendIdPage;
