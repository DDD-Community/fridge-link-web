import { DotIcon, LocationIcon } from '@/assets/icons';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { ShareData } from '@/types/share';
import dayjs from 'dayjs';

const ShareListItem: React.FC<{
  data: ShareData;
}> = ({ data }) => {
  return (
    <Link
      href={`/share/${data.shareId}`}
      className="flex flex-1 items-center mb-[12px] pl-[18px] pr-[12px] py-[16px] rounded-[12px] bg-white"
    >
      {data.thumbnailImage ? (
        <Image src={data.thumbnailImage} width={64} height={64} className="rounded-[8px]" alt="thumbnail" />
      ) : (
        <div className="w-[64px] aspect-square rounded-[8px] bg-gray2" />
      )}
      <div className="ml-[12px]">
        <p className="heading3-bold">{data.title}</p>
        <div className="flex items-center mt-[6px] body2-medium ">
          <LocationIcon width={14} height={14} fill="#B5B9C5" className="mr-[2px]" />
          <p className="flex items-center mt-1 text-ellipsis whitespace-nowrap">
            {data.location}
            <span>
              <DotIcon width={3} height={3} fill="#9299AA" className="mx-[4px] mb-1" />
            </span>
            {`${dayjs(data.shareDate).format('MM월 DD일')} ${data.shareTime.slice(0, 5)}`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShareListItem;
