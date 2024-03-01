import { ClockIcon, DateIcon, LocationIcon } from '@/assets/icons';
import { Header, ShareDetailAuthorBottomWrapper } from '@/components/organisms';
import { ShareInfoRowItem, VerticalLabelValue } from '@/components/molecules';

import Image from 'next/image';
import { Lottie } from '@/components/atoms';
import type { NextPage } from 'next';
import React from 'react';
import dayjs from 'dayjs';
import { useGetShareDetail } from '@/hooks/queries/share';
import { useRouter } from 'next/router';

const ShareDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const shareDetail = useGetShareDetail({ id });

  if (!shareDetail?.data) {
    return <Lottie />;
  }

  const { data, refetch } = shareDetail;

  return (
    <>
      <div className={'min-h-screen mb-[110px]'}>
        <Header backgroundColor="transparent" />
        {data.data?.thumbnailImage ? (
          <Image
            alt="detailImage"
            src={data.data?.thumbnailImage}
            sizes="100vw"
            width={0}
            height={0}
            className="w-full aspect-[375/309]"
          />
        ) : (
          <div className=" w-full aspect-[375/309] bg-gray3" />
        )}

        <div className="relative mt-[-13px] mx-[20px] px-[16px] py-[24px] bg-white rounded-[12px]">
          <p className="text-center body1-semibold text-gray7">
            {data.data?.isCreatedByCurrentLoginUser ? '나의 나눔' : data.data?.nickname}
          </p>
          <p className="mt-[14px] mb-[20px] text-center heading2-semibold text-black">{data.data?.title}</p>
          <div className="flex p-[16px] mb-[6px] justify-between rounded-[12px] bg-gray1">
            <VerticalLabelValue label="식자재" value={data.data?.itemName as string} />
            <hr className="w-[1px] h-[36px] mx-[14px] bg-gray2" />
            <VerticalLabelValue label="모집인원" value={`${data.data?.limitPerson} 명`} />
            <hr className="w-[1px] h-[36px] bg-gray2" />
            <VerticalLabelValue
              label="소비기한"
              value={`D-${dayjs(data.data?.limitDate).diff(dayjs(), 'day') > 0 ? dayjs(data.data?.limitDate).diff(dayjs(), 'day') : 0}`}
            />
          </div>
          <ShareInfoRowItem
            icon={DateIcon}
            label="약속 날짜"
            value={dayjs(data.data?.shareDate).format('YYYY.MM.DD')}
          />
          <ShareInfoRowItem icon={ClockIcon} label="약속시간" value={`${data.data?.shareTime.slice(0, 5)}`} />
          <ShareInfoRowItem icon={LocationIcon} label="약속 장소" value={data.data?.location as string} />
          <hr className="h-0.5 my-[24px] bg-gray1" />

          <div>
            <p className="text-center body1-semibold text-primary2">상세설명</p>
            <p className="mt-[12px] body1-medium text-gray6">{data.data?.content}</p>
          </div>
        </div>
      </div>
      {data.data?.isCreatedByCurrentLoginUser ? (
        <ShareDetailAuthorBottomWrapper id={id} refetch={refetch} curStatus={data.data.status} />
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
