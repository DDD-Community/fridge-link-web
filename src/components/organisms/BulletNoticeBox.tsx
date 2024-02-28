import { DotIcon } from '@/assets/icons';
import React from 'react';

const BulletNoticeBox: React.FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  return (
    <div className="mb-[16px]">
      <p>
        <DotIcon width={4} height={4} fill="#52C5A6" className="inline" />
        <span className="ml-[4px] body2-semibold text-gray7">{title}</span>
      </p>
      <p className="pl-[8px] body2-semibold text-gray6" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BulletNoticeBox;
