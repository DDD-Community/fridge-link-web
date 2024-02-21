import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { type SortLabel } from '@/types/common';
import { RadioButtonField, SortButton } from '../atoms';
import { FriendListItem } from '../organisms';
import { useGetFriendships } from '@/hooks/queries/friendship';
import type { FriendshipData, FriendshipSortType } from '@/types/friendship';
import { SuspenseFallback } from '.';

const SORT_TYPES: SortLabel[] = [
  { label: '이름순', value: 'nickname' },
  { label: '등록순', value: 'createdAt' },
];

const FriendListTemplate: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [curSortType, setCurSortType] = useState<SortLabel>(SORT_TYPES[0]);
  const { data: friendsData } = useGetFriendships({
    sort: curSortType.value as FriendshipSortType,
  });

  if (!friendsData?.pages[0].content) {
    return <SuspenseFallback />;
  }

  return (
    <>
      <div className="mt-[57px] fixed w-screen max-w-[480px]">
        <div className="h-[1px] mt-[-1px] bg-gray1" />
        <div className="flex justify-between px-[20px] py-[18px] bg-white body1-medium">
          <p className="body1-medium">
            총 {friendsData?.pages[0].totalElements}명
          </p>
          <SortButton label={curSortType.label} onClick={onOpen} />
        </div>
      </div>

      <div className="pt-[128px] px-[20px]">
        {friendsData.pages.map((page) =>
          page.content.map((ele: FriendshipData) => (
            <FriendListItem
              key={ele.userId}
              name={ele.nickName}
              count={ele.ingredientCount}
            />
          )),
        )}
      </div>

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
    </>
  );
};

export default FriendListTemplate;
