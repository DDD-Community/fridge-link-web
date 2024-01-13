import React from 'react';
import IcAlertSVG from '@/assets/icons/ICON/COMMON/ic_alert.svg';

const HomeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full h-48">
      <div>로고</div>
      <IcAlertSVG />
    </div>
  );
};

export default HomeHeader;
