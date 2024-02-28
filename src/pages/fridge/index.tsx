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
import { EmptyBox } from '@/components/molecules';
import { Container } from '@/components/atoms';
import withLogin from '@/components/templates/withLogin';

const FridgePage: NextPage = () => {
  const router = useRouter();
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { nickname } = useGetMe();

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
            userName={nickname}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
            isOkIngredientAdd={true}
          />
          {fridgeId ? (
            <FridgeBoard />
          ) : (
            <Container className="p-[20px] bg-white">
              <EmptyBox text={`추가된 식자재가 없어요!`} />
            </Container>
          )}
        </section>
      </div>
    </>
  );
};
export default withLogin(FridgePage);
