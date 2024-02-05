import { RadioButtonField, SortButton, TabButton } from '@/components/atoms';
import Header from '@/components/organisms/Header';
import ShareListItem from '@/components/organisms/ShareListItem';
import { type NextPage } from 'next';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import { PlusIcon } from '@/assets/icons';
import { type SortLabel, type TabLabel } from '@/types/common';
import dayjs from 'dayjs';
import Link from 'next/link';

export const TABS: TabLabel[] = [
  { label: '나눔 신청', value: 'enroll' },
  { label: '나눔 중', value: 'proceeding' },
  { label: '나눔 완료', value: 'complete' },
];

export const SORT_TYPES: SortLabel[] = [
  { label: '최신순', value: 'latest' },
  { label: '마감순', value: 'earliest' },
];

const MOCK_DATA = {
  count: 2,
  data: [
    {
      id: 1,
      thumbnail: null,
      title: '사과 받아갈 사람',
      location: '공덕역',
      date: dayjs('2024-12-14 10:35'),
    },
    {
      id: 2,
      thumbnail: null,
      title: '사과 받아갈 사람',
      location: '디지털미디어시티역',
      date: dayjs('2024-12-14 10:35'),
    },
  ],
};

const SharePage: NextPage = () => {
  const [curTab, setCurTab] = useState<TabLabel>(TABS[0]);
  const [curSortType, setCurSortType] = useState<SortLabel>(SORT_TYPES[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <p className="body1-medium">총 {MOCK_DATA.count}건</p>
            <SortButton label={curSortType.label} onClick={onOpen} />
          </div>
        </div>

        <div className="pt-[128px] px-[20px]">
          {MOCK_DATA.data.map((ele) => (
            <ShareListItem key={ele.id} data={ele} />
          ))}
        </div>
        <div className="flex justify-end pr-[20px]">
          <Link
            href={'/add-share'}
            className="fixed bottom-[88px] flex justify-center items-center px-[16px] py-[12px] rounded-[50px] bg-primary1"
          >
            <PlusIcon fill="#FFFFFF" />
            <span className="ml-[4px] heading4-semibold text-white">
              글쓰기
            </span>
          </Link>
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
