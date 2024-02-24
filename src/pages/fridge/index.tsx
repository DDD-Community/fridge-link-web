import Header from '@/components/organisms/Header';
import {
  FridgeBoard,
  FridgeInfoBox,
  FridgeListModal,
} from '@/components/organisms';
import { type NextPage } from 'next';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import { useGetMe } from '@/hooks/queries/mypage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FridgePage: NextPage = () => {
  const router = useRouter();
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { nickName } = useGetMe();

  const { fridgeid: fridgeId } = router.query;

  useEffect(() => {
    if (!fridgeId) {
      onOpenFridgeListModal();
    }
  }, []);

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
            <FridgeListModal onCloseFridgeListModal={onCloseFridgeListModal} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'내 냉장고'} />
        <section
          className={`flex flex-col min-h-screen p-0 pl-20 pr-20 pb-20 bg-gray1`}
        >
          <FridgeInfoBox
            userName={nickName}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
            isOkIngredientAdd={true}
          />
          <FridgeBoard fridgeId={Number(fridgeId)} />
        </section>
      </div>
    </>
  );
};
export default FridgePage;
