import { Radio, TabButton } from '@/components/atoms';
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
import { AngleIcon, PlusIcon } from '@/assets/icons';

type TabValue = 'enroll' | 'proceeding' | 'complete';

interface Tab {
  label: string;
  value: TabValue;
}

type SortValue = 'latest' | 'earliest';

interface Sort {
  label: string;
  value: SortValue;
}

const TABS: Tab[] = [
  { label: '나눔 신청', value: 'enroll' },
  { label: '나눔 중', value: 'proceeding' },
  { label: '나눔 완료', value: 'complete' },
];

const SORT_TYPES: Sort[] = [
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
      date: '2024-12-14 10:35',
    },
    {
      id: 2,
      thumbnail: null,
      title: '사과 받아갈 사람',
      location: '디지털미디어시티역',
      date: '2024-12-14 10:35',
    },
  ],
};

const SharePage: NextPage = () => {
  const [curTab, setCurTab] = useState<Tab>(TABS[0]);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [curSortType, setCurSortType] = useState<Sort>(SORT_TYPES[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'나눔'} backgroundColor="white" />
        <div className="fixed w-screen max-w-[480px]">
          <div className="flex px-[20px] bg-white">
            {TABS.map((ele) => (
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
            <button
              onClick={onOpen}
              className="flex justify-center items-center"
            >
              <span className="mr-[4px] text-gray5">{curSortType.label}</span>
              <AngleIcon
                width={14}
                height={14}
                fill="#9299AA"
                transform="rotate(270)"
              />
            </button>
          </div>
        </div>

        <div className="pt-[128px] px-[20px]">
          {MOCK_DATA.data.map((ele) => (
            <ShareListItem key={ele.id} data={ele} />
          ))}
        </div>
        <button className="fixed bottom-[88px] right-[20px] flex justify-center items-center px-[16px] py-[12px] rounded-[50px] bg-primary1">
          <PlusIcon fill="#FFFFFF" />
          <span className="ml-[4px] heading4-semibold text-white">글쓰기</span>
        </button>
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
          >
            <ModalBody>
              {SORT_TYPES.map((ele) => (
                <button
                  key={ele.value}
                  onClick={() => {
                    setCurSortType(ele);
                    onClose();
                  }}
                  className="flex flex-1 w-screen px-[20px] py-[24px] justify-between"
                >
                  <p className="heading3-semibold">{ele.label}</p>
                  <Radio checked={ele.value === curSortType.value} />
                </button>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default SharePage;
