import Header from '@/components/organisms/Header';
import { FridgeBoard, FridgeInfoBox, FridgeListModal } from '@/components/organisms';
import { type NextPage } from 'next';
import { Modal, ModalOverlay, ModalBody, ModalContent, useDisclosure } from '@chakra-ui/react';
import { useGetMe } from '@/hooks/queries/mypage';
import { useEffect } from 'react';
import withLogin from '@/components/templates/withLogin';
import useGetMyFridgeList from '@/hooks/queries/fridge/useGetFridgeList';
import { useRouter } from 'next/router';

const FridgePage: NextPage = () => {
  const router = useRouter();
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const fridgeList = useGetMyFridgeList();
  const { nickname } = useGetMe();

  useEffect(() => {
    if (!fridgeList || fridgeList.length < 0) {
      return;
    }
    router.push(`/fridge?fridgeid=${fridgeList[0].id}&name=${fridgeList[0].name}`);
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
            <FridgeListModal onCloseFridgeListModal={onCloseFridgeListModal} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'내 냉장고'} />
        <section className={`flex flex-col min-h-screen p-0 pl-20 pr-20 pb-20 bg-gray1`}>
          <FridgeInfoBox
            userName={nickname}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
            isOkIngredientAdd={true}
          />
          <FridgeBoard />
        </section>
      </div>
    </>
  );
};
export default withLogin(FridgePage);
