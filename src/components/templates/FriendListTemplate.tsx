import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useRef, useState } from 'react';
import { type SortLabel } from '@/types/common';
import { RadioButtonField, SortButton } from '../atoms';
import { FriendListItem } from '../organisms';
import { useGetFriendships } from '@/hooks/queries/friendship';
import type { FriendshipData, FriendshipSortType } from '@/types/friendship';
import { SuspenseFallback } from '.';
import { useObserver } from '@/hooks/useObserver';

const SORT_TYPES: SortLabel[] = [
  { label: '이름순', value: 'nickname' },
  { label: '등록순', value: 'createdAt' },
];

const FriendListTemplate: React.FC = () => {
  const bottom = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [curSortType, setCurSortType] = useState<SortLabel>(SORT_TYPES[0]);
  const {
    data: friendsData,
    fetchNextPage: friendsNextPage,
    isFetchingNextPage: isFetchingfriendsNextPage,
  } = useGetFriendships({
    sort: curSortType.value as FriendshipSortType,
  });

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void friendsNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  if (!friendsData?.pages[0].content) {
    return <SuspenseFallback />;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="mt-[57px] fixed w-screen max-w-[480px] z-10">
        <div className="h-[1px] mt-[-1px] bg-gray1" />
        <div className="flex justify-between px-[20px] py-[18px] bg-white body1-medium">
          <p className="body1-medium">
            총 {friendsData?.pages[0].totalElements}명
          </p>
          <SortButton label={curSortType.label} onClick={onOpen} />
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto pt-[128px] px-[20px]">
        {friendsData.pages.map((page) =>
          page.content.map((ele: FriendshipData) => (
            <FriendListItem
              key={ele.userId}
              name={ele.nickname}
              count={ele.ingredientCount}
              // TODO profileEnum api res 필드값으로 대체
              profileEnum={'GREEN'}
            />
          )),
        )}
      </div>
      {isFetchingfriendsNextPage ? <SuspenseFallback /> : <div ref={bottom} />}

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        trapFocus={false}
      >
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
    </div>
  );
};

export default FriendListTemplate;
