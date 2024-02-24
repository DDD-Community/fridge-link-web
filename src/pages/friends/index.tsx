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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container } from '@/components/atoms';
import { EmptyBox } from '@/components/molecules';
import { PlusIcon } from '@/assets/icons';
import { useRouter } from 'next/router';

const FriendsPage: NextPage = () => {
  const router = useRouter();

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
        <Header
          headerTitle={'친구 냉장고'}
          headerRight={
            <PlusIcon
              fill="gray7"
              width={24}
              height={24}
              onClick={() => {
                router.push('/mypage/friendship');
              }}
            />
          }
        />
        <section
          className={`flex flex-col min-h-screen pt-[10px] pl-20 pr-20 pb-20 bg-gray1`}
        >
          {friendsNewsList && friendsNewsList.length !== 0 ? (
            <Swiper className="w-[100%]" spaceBetween={20}>
              {friendsNewsList.map((friendNews) => (
                <SwiperSlide key={friendNews.nickname} className="gap-[20px]">
                  <FriendsRecentBoard friendNews={friendNews} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Container className="bg-white">
              <EmptyBox text="친구의 최신근황이 없어요" />
            </Container>
          )}
          <FriendsFridgeList
            toggleIsOpenOrderListModal={onOpenOrderListModal}
          />
        </section>
      </div>
    </>
  );
};
export default FriendsPage;
