import { EmptyBox } from '../molecules';
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Container, Lottie, RadioButtonField, SortButton } from '../atoms';
import React, { useRef, useState } from 'react';
import { useGetCount } from '@/hooks/queries/mypage';
import type { SortLabel } from '@/types/common';
import { SORT_TYPES } from '../templates/FriendListTemplate';
import { useGetFriendships } from '@/hooks/queries/friendship';
import type { FriendshipData, FriendshipSortType } from '@/types/friendship';
import { useObserver } from '@/hooks/useObserver';
import { FriendListItem } from '.';
import { useRouter } from 'next/router';

const FriendsFridgeList: React.FC<{
  toggleIsOpenOrderListModal: () => void;
}> = ({ toggleIsOpenOrderListModal }) => {
  const router = useRouter();
  const bottom = useRef<HTMLDivElement>(null);
  const [curSortType, setCurSortType] = useState<SortLabel>(SORT_TYPES[0]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const count = useGetCount()?.friendCount;

  const {
    data: friendsData,
    fetchNextPage: fetchFriendsNextPage,
    isFetchingNextPage: isFetchingfriendsNextPage,
  } = useGetFriendships({
    sort: curSortType.value as FriendshipSortType,
    size: 5,
  });

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void fetchFriendsNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" trapFocus={false}>
        <ModalOverlay height="100vh" onClick={onClose} />
        <ModalContent
          className=" bg-white"
          position="fixed"
          bottom="0"
          mb="72"
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
          margin={0}
        >
          <ModalBody padding={0}>
            {SORT_TYPES.map((ele: SortLabel) => (
              <RadioButtonField
                key={ele.value}
                label={ele.label}
                onClick={() => {
                  setCurSortType(ele);
                  onClose();
                }}
                checked={ele.value === curSortType.value}
              />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="mt-[37px]">
        <div className="mb-[19.5px] flex justify-between">
          <div className="heading2-semibold text-gray8">
            친구 목록 <span className="heading2-bold text-primary3">{count}</span>
          </div>
          <SortButton label={curSortType.label} onClick={onOpen} />
        </div>
        <Container className="bg-white p-[20px]">
          <section className="flex flex-col w-full">
            {friendsData?.pages.map((page) =>
              page.content && page.content.length === 0 ? (
                <EmptyBox text="추가된 친구가 없어요!" />
              ) : (
                page.content.map((ele: FriendshipData) => (
                  <FriendListItem
                    key={ele.userId}
                    data={ele}
                    possibleDelete={false}
                    onClick={() => {
                      router.push(`/friend/${ele.userId}?name=${ele.nickname}`);
                    }}
                    active={false}
                  />
                ))
              ),
            )}
            {isFetchingfriendsNextPage ? <Lottie /> : <div ref={bottom} />}
          </section>
        </Container>
      </div>
    </>
  );
};

export default FriendsFridgeList;
