import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { Button, RadioButtonField } from '@/components/atoms';
import React from 'react';
import { type SortLabel } from '@/types/common';
import { useGetShareApplicants } from '@/hooks/queries/share';
import ShareApplicantListItem from './ShareApplicantListItem';

const SHARE_STATUSES = [
  { label: '나눔 신청', value: 'enroll' },
  { label: '나눔 중', value: 'proceeding' },
  { label: '나눔 완료', value: 'complete' },
];

const ShareDetailAuthorBottomWrapper: React.FC<{
  id: string | string[] | undefined;
  curStatus: SortLabel;
  onChangeStatus: React.Dispatch<React.SetStateAction<SortLabel>>;
}> = ({ id, curStatus, onChangeStatus }) => {
  const {
    isOpen: isStatusModalOpen,
    onOpen: onStatusModalOpen,
    onClose: onStatusModalClose,
  } = useDisclosure();
  const {
    isOpen: isParticipantsModalOpen,
    onOpen: onParticipantsModalOpen,
    onClose: onParticipantsModalClose,
  } = useDisclosure();

  const applicants = useGetShareApplicants({ id });

  return (
    <>
      <div className="fixed flex gap-[11px] w-full max-w-[480px] bottom-0 p-[20px] pb-[32px] bg-gray1">
        <Button
          onClick={onStatusModalOpen}
          className="w-full py-[16px] text-gray6 bg-gray2"
          text={'상태 변경'}
        />
        <Button
          onClick={onParticipantsModalOpen}
          className="w-full py-[16px] text-white bg-primary2"
          text="신청인원 확인"
        />
      </div>

      <Modal
        onClose={onStatusModalClose}
        isOpen={isStatusModalOpen}
        motionPreset="slideInBottom"
        trapFocus={false}
      >
        <ModalOverlay height="100vh" onClick={onStatusModalClose} />
        <ModalContent
          className=" bg-white"
          position="fixed"
          bottom="0"
          margin={0}
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
        >
          <ModalBody padding={0}>
            {SHARE_STATUSES.map((ele) => (
              <RadioButtonField
                key={ele.value}
                label={ele.label}
                onClick={() => {
                  onChangeStatus(ele);
                }}
                checked={ele.value === curStatus.value}
              />
            ))}
            <div className="px-[20px] pb-[32px]">
              <Button
                className="block w-full bg-primary2"
                text={'선택 완료'}
                onClick={onStatusModalClose}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        onClose={onParticipantsModalClose}
        isOpen={isParticipantsModalOpen}
        motionPreset="slideInBottom"
        trapFocus={false}
      >
        <ModalOverlay height="100vh" onClick={onParticipantsModalClose} />
        <ModalContent
          className=" bg-white"
          position="fixed"
          bottom="0"
          margin={0}
          borderRadius="24px 24px 0px 0px"
          maxW="lg"
        >
          <ModalBody>
            <div className="max-h-[300px] overflow-scroll px-[20px] pt-[40px] py-[20px]">
              {applicants?.map((ele, idx) => (
                <ShareApplicantListItem
                  key={ele.nickname}
                  idx={idx}
                  data={ele}
                />
              ))}
            </div>
            <div className="pt-[20px] pb-[32px]">
              <Button
                className="block w-full bg-primary2"
                text={'확인'}
                onClick={onParticipantsModalClose}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareDetailAuthorBottomWrapper;
