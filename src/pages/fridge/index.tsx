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
import { useGetFridgeContentById } from '@/hooks/queries/fridge';
import { useRouter } from 'next/router';

const FridgePage: NextPage = () => {
  const router = useRouter();
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { nickName } = useGetMe();

  const { fridgeid: fridgeId } = router.query;

  if (!fridgeId) {
    onOpenFridgeListModal();
  }

  const data = useGetFridgeContentById(Number(fridgeId))?.content;

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
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <FridgeInfoBox
            userName={nickName}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
            isOkIngredientAdd={true}
          />
          <FridgeBoard data={data} />
        </section>
      </div>
    </>
  );
};
export default FridgePage;
