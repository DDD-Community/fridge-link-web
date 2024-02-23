import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { type SortLabel } from '@/types/common';
import { Button, RadioButtonField, SortButton } from '@/components/atoms';
import { FriendListItem } from '../organisms';
import {
  useDeleteFriendship,
  useGetFriendships,
} from '@/hooks/queries/friendship';
import type { FriendshipData, FriendshipSortType } from '@/types/friendship';
import { SuspenseFallback } from '.';
import { useObserver } from '@/hooks/useObserver';

const SORT_TYPES: SortLabel[] = [
  { label: '이름순', value: 'nickname' },
  { label: '등록순', value: 'createdAt' },
];

const FriendListTemplate: React.FC<{ possibleDelete: boolean }> = ({
  possibleDelete,
}) => {
  const bottom = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();
  const [curSortType, setCurSortType] = useState<SortLabel>(SORT_TYPES[0]);
  const [selectedFriendIds, setSelectedFriendIds] = useState<number[]>([]);
  const {
    data: friendsData,
    fetchNextPage: fetchFriendsNextPage,
    isFetchingNextPage: isFetchingfriendsNextPage,
    refetch: friendsRefetch,
  } = useGetFriendships({
    sort: curSortType.value as FriendshipSortType,
  });

  const deleteFriendship = useDeleteFriendship({
    onSuccess: () => {
      deleteOnClose();
      friendsRefetch();
    },
  });

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void fetchFriendsNextPage();
    }
  };

  const onClickDeleteFriends = useCallback(() => {
    const friendIds: Array<{ friendId: number }> = [];
    selectedFriendIds.forEach((ele) => friendIds.push({ friendId: ele }));
    deleteFriendship.mutate(friendIds);
  }, [selectedFriendIds]);

  const selectFriend = useCallback(
    (id: number) => {
      const tempSelectedFriendIds = selectedFriendIds.slice();
      const idx = tempSelectedFriendIds.indexOf(id);
      if (idx === -1) {
        tempSelectedFriendIds.push(id);
      } else {
        tempSelectedFriendIds.splice(idx, 1);
      }
      setSelectedFriendIds(tempSelectedFriendIds);
    },
    [selectedFriendIds],
  );

  useObserver({
    target: bottom,
    onIntersect,
  });

  useEffect(() => {
    setSelectedFriendIds([]);
  }, [possibleDelete]);

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
              data={ele}
              possibleDelete={possibleDelete}
              onClick={() => {
                selectFriend(ele.userId);
              }}
              active={selectedFriendIds.includes(ele.userId)}
            />
          )),
        )}
        {isFetchingfriendsNextPage ? (
          <SuspenseFallback />
        ) : (
          <div ref={bottom} />
        )}
      </div>

      {possibleDelete ? (
        <div className="fixed w-screen max-w-[480px] bottom-0 px-[20px] py-[26px]">
          <Button
            text={'삭제하기'}
            className={`w-full ${selectedFriendIds.length === 0 ? 'bg-gray3 text-gray1' : 'bg-primary2 text-white'}`}
            onClick={deleteOnOpen}
            disabled={selectedFriendIds.length === 0}
          />
        </div>
      ) : null}

      <Modal
        onClose={deleteOnClose}
        isOpen={deleteIsOpen}
        motionPreset="slideInBottom"
        trapFocus={false}
      >
        <ModalOverlay height="100vh" onClick={onClose} />
        <ModalContent
          className=" bg-white"
          top="40%"
          borderRadius="16px"
          maxW="lg"
          margin={'20px'}
        >
          <ModalBody padding={'20px'} textAlign="center">
            <p className="mb-[20px] heading2-bold">친구삭제</p>
            <p className="mb-[20px] body1-medium text-gray6">
              삭제하기 버튼을 누르면 친구 목록에서 삭제됩니다.
            </p>
            <div className="flex justify-between gap-[16px]">
              <Button
                text={'뒤로가기'}
                className="flex flex-1 justify-center bg-gray2 text-gray6"
                onClick={deleteOnClose}
              />
              <Button
                text={'삭제하기'}
                className="flex flex-1 justify-center bg-primary2 text-white"
                onClick={onClickDeleteFriends}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

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
