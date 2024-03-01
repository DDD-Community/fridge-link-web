import { ClockIcon, DateIcon, LocationIcon } from '@/assets/icons';
import { ShareInfoRowItem, VerticalLabelValue } from '@/components/molecules';
import { Header, ShareDetailAuthorBottomWrapper } from '@/components/organisms';
import { useGetShareDetail } from '@/hooks/queries/share';
import { type SortLabel } from '@/types/common';
import dayjs from 'dayjs';
import { type NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const MOCK_DATA_IS_AUTHOR: boolean = true;

const MOCK_DATA_SHARE_STATUS = { label: '나눔 신청', value: 'enroll' };

const ShareDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [curStatus, setCurStatus] = useState<SortLabel>(MOCK_DATA_SHARE_STATUS);

  const data = useGetShareDetail({ id });

  useEffect(() => {
    if (window) {
      console.log(window.innerWidth);
    }
  }, []);

  return (
    <>
      <div className={'min-h-screen mb-[110px]'}>
        <Header backgroundColor="transparent" />
        {data?.thumbnailImage ? (
          <Image
            alt="detailImage"
            src={data?.thumbnailImage}
            sizes="100vw"
            width={0}
            height={0}
            className="w-full aspect-[375/309]"
          />
        ) : (
          <div className=" w-full aspect-[375/309] bg-gray3" />
        )}

        <div className="relative mt-[-13px] mx-[20px] px-[16px] py-[24px] bg-white rounded-[12px]">
          <p className="text-center body1-semibold text-gray7">{MOCK_DATA_IS_AUTHOR ? '나의 나눔' : data?.userName}</p>
          <p className="mt-[14px] mb-[20px] text-center heading2-semibold text-black">{data?.title}</p>
          <div className="flex p-[16px] mb-[6px] justify-between rounded-[12px] bg-gray1">
            <VerticalLabelValue label="식자재" value={data?.itemName as string} />
            <hr className="w-[1px] h-[36px] mx-[14px] bg-gray2" />
            <VerticalLabelValue label="모집인원" value={`${data?.limitPerson} 명`} />
            <hr className="w-[1px] h-[36px] bg-gray2" />
            <VerticalLabelValue
              label="소비기한"
              value={`D-${dayjs(data?.limitDate).diff(dayjs(), 'day') > 0 ? dayjs(data?.limitDate).diff(dayjs(), 'day') : 0}`}
            />
          </div>
          <ShareInfoRowItem icon={DateIcon} label="약속 날짜" value={dayjs(data?.shareDate).format('YYYY.MM.DD')} />
          <ShareInfoRowItem icon={ClockIcon} label="약속시간" value={`${data?.shareTime.slice(0, 5)}`} />
          <ShareInfoRowItem icon={LocationIcon} label="약속 장소" value={data?.location as string} />
          <hr className="h-0.5 my-[24px] bg-gray1" />

          <div>
            <p className="text-center body1-semibold text-primary2">상세설명</p>
            <p className="mt-[12px] body1-medium text-gray6">{data?.content}</p>
          </div>
        </div>
      </div>
      {MOCK_DATA_IS_AUTHOR ? (
        <ShareDetailAuthorBottomWrapper id={id} curStatus={curStatus} onChangeStatus={setCurStatus} />
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
