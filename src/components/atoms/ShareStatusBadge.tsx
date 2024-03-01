import React, { useMemo } from 'react';

import type { ShareStatusType } from '@/types/friendship';

const ShareStatusBadge: React.FC<{ status: ShareStatusType }> = ({ status }) => {
  const text = useMemo(() => {
    switch (status) {
      case 'SHARE_START':
        return '나눔 신청';
      case 'SHARE_IN_PROGRESS':
        return '나눔 중';
      case 'SHARE_COMPLETE':
        return '나눔 완료';
      default:
        return '';
    }
  }, [status]);

  const className = useMemo(() => {
    switch (status) {
      case 'SHARE_START':
        return 'bg-[#DCF3ED] text-primary2';
      case 'SHARE_IN_PROGRESS':
        return 'bg-[#FFEBE6] text-point3';
      case 'SHARE_COMPLETE':
        return 'bg-gray0 text-gray4';
      default:
        return '';
    }
  }, [status]);

  return <div className={`px-[8px] py-[4px] rounded-[6px] body2-medium ${className} `}>{text}</div>;
};

export default ShareStatusBadge;
