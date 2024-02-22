import {
  FriendsFridgeList,
  FriendsRecentBoard,
  OrderListModal,
} from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { useGetFriendsNews } from '@/hooks/queries/friends';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { type NextPage } from 'next';

const FriendsPage: NextPage = () => {
  const {
    isOpen: isOpenOrderListModal,
    onOpen: onOpenOrderListModal,
    onClose: onCloseOrderListModal,
  } = useDisclosure();

  const friendsNewsList = useGetFriendsNews();

  return (
    <>
      <Modal
        onClose={onCloseOrderListModal}
        isOpen={isOpenOrderListModal}
        motionPreset="slideInBottom"
        trapFocus={false}
      >
        <ModalOverlay height="100vh" onClick={onCloseOrderListModal} />
        <ModalContent
          className="bg-white"
          position="fixed"
          bottom="0"
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
          margin={0}
        >
          <ModalBody padding={0}>
            <OrderListModal currentOrder={'등록순'} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'친구 냉장고'} />
        <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
          {friendsNewsList &&
            [friendsNewsList[0]].map((friendNews) => (
              <FriendsRecentBoard
                key={friendNews.nickname}
                friendNews={friendNews}
              />
            ))}
          <FriendsFridgeList
            toggleIsOpenOrderListModal={onOpenOrderListModal}
          />
        </section>
      </div>
    </>
  );
};
export default FriendsPage;
