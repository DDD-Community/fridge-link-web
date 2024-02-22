import {
  FridgeBoard,
  FridgeInfoBox,
  FridgeListModal,
} from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetFridgeContentById } from '@/hooks/queries/fridge';
const FriendIdPage: NextPage = () => {
  const router = useRouter();
  const [nickname, setNickName] = useState('');
  const {
    isOpen: isOpenFridgeListModal,
    onOpen: onOpenFridgeListModal,
    onClose: onCloseFridgeListModal,
  } = useDisclosure();

  const { id: fridgeId, name } = router.query;

  if (!fridgeId) {
    onOpenFridgeListModal();
  }

  const data = useGetFridgeContentById(Number(fridgeId))?.content;

  useEffect(() => {
    setNickName(name as string);
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
            {/* 친구 아이디 넣어야함 */}
            <FridgeListModal ownerId={Number(fridgeId)} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'친구 냉장고'} />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          <FridgeInfoBox
            userName={nickname}
            toggleIsOpenFridgeListModal={onOpenFridgeListModal}
          />
          <FridgeBoard data={data} />
        </section>
      </div>
    </>
  );
};
export default FriendIdPage;
