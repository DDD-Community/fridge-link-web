import { useApplyShare, useDeleteApplyShare } from '@/hooks/queries/share';

import React from 'react';
import type { ShareStatusType } from '@/types/friendship';
import useToast from '@/hooks/useToast';

const APPLY_SUCCESS_MESSAGE = '나눔 신청이 완료되었습니다.';
const APPLY_DELETE_SUCCESS_MESSAGE = '나눔 신청이 취소되었습니다.';

const ShareDetailFriendBottomWrapper: React.FC<{
  id: string | string[] | undefined;
  isApplied: boolean;
  curStatus: ShareStatusType;
  refetch: () => void;
}> = ({ id, isApplied, curStatus, refetch }) => {
  const { showToast } = useToast();
  const applyShare = useApplyShare({
    onSuccess: () => {
      showToast(APPLY_SUCCESS_MESSAGE, 'success');
      refetch();
    },
  });
  const deleteShare = useDeleteApplyShare({
    id: Number(id),
    onSuccess: () => {
      showToast(APPLY_DELETE_SUCCESS_MESSAGE, 'success');
      refetch();
    },
  });

  const onApply = () => {
    applyShare.mutate({ shareId: Number(id) });
  };

  const onApplyCancel = () => {
    deleteShare.mutate({});
  };

  if (curStatus === 'SHARE_COMPLETE') {
    return (
      <div className="fixed w-full max-w-[480px] bottom-0 p-[20px] pb-[32px] z-300 bg-gray1">
        <p className="w-full text-center py-[16px] rounded-[12px] text-gray0 bg-gray3 heading4-semibold">
          나눔 신청 종료
        </p>
      </div>
    );
  }

  return (
    <div className="fixed w-full max-w-[480px] bottom-0 p-[20px] pb-[32px] z-300 bg-gray1">
      <button
        onClick={isApplied ? onApplyCancel : onApply}
        className="w-full text-center py-[16px] rounded-[12px] text-white bg-primary2 heading4-semibold"
      >
        {isApplied ? '나눔 신청 완료' : '나눔 신청'}
      </button>
    </div>
  );
};

export default ShareDetailFriendBottomWrapper;
