import React from 'react';
import IcNowSVG from '@/assets/icons/ICON/COMMON/ic_now.svg';

interface NearExpirationWarnBoxProps {
  count: number;
  className: string;
}

const NearExpirationWarnBox: React.FC<NearExpirationWarnBoxProps> = ({
  count,
  className,
}) => {
  return (
    <div
      className={`flex items-center gap-8.5 h-45 bg-gray8 p-12 rounded-12 ${className}`}
    >
      <IcNowSVG />
      <div className="text-gray2 body1-regular">
        소비기한이 얼마 안 남은 식자재가{' '}
        <span className="text-white body1-semibold">{count}개</span> 있어요!
      </div>
    </div>
  );
};

export default NearExpirationWarnBox;
