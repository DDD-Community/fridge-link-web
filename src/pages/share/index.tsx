import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Lottie, RadioButtonField, SortButton, TabButton } from '@/components/atoms';
import type { ShareSortType, ShareStatusType } from '@/types/friendship';
import type { SortLabel, TabLabel } from '@/types/common';
import { useRef, useState } from 'react';

import Header from '@/components/organisms/Header';
import Link from 'next/link';
import type { NextPage } from 'next';
import { PlusIcon } from '@/assets/icons';
import { type ShareData } from '@/types/share';
import ShareListItem from '@/components/organisms/ShareListItem';
import { useGetShares } from '@/hooks/queries/share';
import { useObserver } from '@/hooks/useObserver';

const TABS: TabLabel[] = [
  { label: '나눔 신청', value: 'SHARE_START' },
  { label: '나눔 중', value: 'SHARE_IN_PROGRESS' },
  { label: '나눔 완료', value: 'SHARE_COMPLETE' },
];

const SORT_TYPES: SortLabel[] = [
  { label: '최신순', value: 'registeredDate' },
  { label: '마감순', value: 'dueDate' },
];

const SharePage: NextPage = () => {
  const [curTab, setCurTab] = useState<TabLabel>(TABS[0]);
  const [curSortType, setCurSortType] = useState<SortLabel>(SORT_TYPES[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bottom = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, isFetchingNextPage } = useGetShares({
    sort: curSortType.value as ShareSortType,
    status: curTab.value as ShareStatusType,
  });

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) {
      void fetchNextPage();
    }
  };

  useObserver({
    target: bottom,
    onIntersect,
  });

  if (!data?.pages[0].content) {
    return <Lottie />;
  }

  return (
    <>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'나눔'} backgroundColor="white" />
        <div className="fixed w-screen max-w-[480px]">
          <div className="flex px-[20px] bg-white">
            {TABS.map((ele: TabLabel) => (
              <TabButton
                key={ele.value}
                onClick={() => {
                  setCurTab(ele);
                }}
                active={ele.value === curTab.value}
                label={ele.label}
              />
            ))}
          </div>
          <div className="h-[1px] mt-[-1px] bg-gray1" />
          <div className="flex justify-between px-[20px] py-[18px] bg-white body1-medium">
            <p className="body1-medium">총 {data?.pages[0].totalElements}건</p>
            <SortButton label={curSortType.label} onClick={onOpen} />
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto pt-[128px] px-[20px]">
          {data?.pages.map((page) =>
            page.content.map((ele: ShareData) => <ShareListItem key={ele.shareId} data={ele} />),
          )}
          {isFetchingNextPage ? <Lottie /> : <div ref={bottom} />}
        </div>

        <div className="flex justify-end pr-[20px]">
          <Link
            href={'/add-share'}
            className="fixed bottom-[88px] flex justify-center items-center px-[16px] py-[12px] rounded-[50px] bg-primary1"
          >
            <PlusIcon fill="#FFFFFF" />
            <span className="ml-[4px] heading4-semibold text-white">글쓰기</span>
          </Link>
        </div>
        <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" trapFocus={false}>
          <ModalOverlay height="100vh" onClick={onClose} />
          <ModalContent
            className=" bg-white"
            position="fixed"
            bottom="0"
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
    </>
  );
};
export default SharePage;
