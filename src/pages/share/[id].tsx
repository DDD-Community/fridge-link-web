import { ClockIcon, DateIcon, LocationIcon } from '@/assets/icons';
import { ShareInfoRowItem, VerticalLabelValue } from '@/components/molecules';
import { Header, ShareDetailAuthorBottomWrapper } from '@/components/organisms';
import { type SortLabel } from '@/types/common';
import dayjs from 'dayjs';
import { type NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MOCK_DATA = {
  shareerName: '김지수',
  image: '',
  title: '사과받아갈사람선착순12345명',
  ingredient: '사과',
  fixedNum: 15,
  useByDate: dayjs('2024-02-30'),
  meetingDate: dayjs('2024-02-20'),
  meetingTime: '14:00',
  meetingLocation: '디지털시티역 8번출구 뜌레주르앞',
  desc: '사과는역시청송사과맛있음은당연보장선착순1명사과는역시청송사과맛있음은당연보장선착순1명사과는역체시청송사과맛있음은당연보장선착순1명사과는역시청송사과맛있음은당연보장선착순1명은당연보장선착순1명사당연',
};

const MOCK_DATA_IS_AUTHOR: boolean = true;

const MOCK_DATA_SHARE_STATUS = { label: '나눔 신청', value: 'enroll' };

const ShareDetailPage: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { id } = router.query;
  const [curStatus, setCurStatus] = useState<SortLabel>(MOCK_DATA_SHARE_STATUS);

  return (
    <>
      <div className={'min-h-screen mb-[110px]'}>
        <Header backgroundColor="transparent" />
        {MOCK_DATA.image ? (
          <Image alt="detailImage" src={''} fill sizes="100vw" />
        ) : (
          <div className=" w-full aspect-[375/309] bg-gray3" />
        )}

        <div className="mt-[-13px] mx-[20px] px-[16px] py-[24px] bg-white rounded-[12px]">
          <p className="text-center body1-semibold text-gray7">
            {MOCK_DATA_IS_AUTHOR ? '나의 나눔' : MOCK_DATA.shareerName}
          </p>
          <p className="mt-[14px] mb-[20px] text-center heading2-semibold text-black">
            {MOCK_DATA.title}
          </p>
          <div className="flex p-[16px] mb-[6px] justify-between rounded-[12px] bg-gray1">
            <VerticalLabelValue label="식자재" value={MOCK_DATA.ingredient} />
            <hr className="w-[1px] h-[36px] mx-[14px] bg-gray2" />
            <VerticalLabelValue
              label="모집인원"
              value={`${MOCK_DATA.fixedNum} 명`}
            />
            <hr className="w-[1px] h-[36px] bg-gray2" />
            <VerticalLabelValue
              label="소비기한"
              value={`D-${MOCK_DATA.useByDate.diff(dayjs(), 'day')}`}
            />
          </div>
          <ShareInfoRowItem
            icon={DateIcon}
            label="약속 날짜"
            value={MOCK_DATA.meetingDate.format('YYYY.MM.DD')}
          />
          <ShareInfoRowItem
            icon={ClockIcon}
            label="약속시간"
            value={MOCK_DATA.meetingTime}
          />
          <ShareInfoRowItem
            icon={LocationIcon}
            label="약속 장소"
            value={MOCK_DATA.meetingLocation}
          />
          <hr className="h-0.5 my-[24px] bg-gray1" />

          <div>
            <p className="text-center body1-semibold text-primary2">상세설명</p>
            <p className="mt-[12px] body1-medium text-gray6">
              사과는역시청송사과맛있음은당연보장선착순1명사과는역시청송사과맛있음은당연보장선착순1명사과는역시청송사과맛있음은당연보장선착순1명사과는역시청송사과맛있음은당연보장선착순1명은당연보장선착순1명사당연
            </p>
          </div>
        </div>
      </div>
      {MOCK_DATA_IS_AUTHOR ? (
        <ShareDetailAuthorBottomWrapper
          curStatus={curStatus}
          onChangeStatus={setCurStatus}
        />
      ) : (
        <div className="fixed w-full max-w-[480px] bottom-0 p-[20px] pb-[32px] z-300 bg-gray1">
          <button className="w-full text-center py-[16px] rounded-[12px] text-white bg-primary2 heading4-semibold">
            나눔 신청
          </button>
        </div>
      )}
    </>
  );
};

export default ShareDetailPage;
