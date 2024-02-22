import { BulletNoticeBox } from '../organisms';
import { LabelRoundBox } from '../molecules';
import { MiniButton } from '@/components/atoms';
import React from 'react';
import { queryKeys } from '@/hooks/queries/queryKeys';
import { useBaseQuery } from '@/hooks/queries/useBaseQuery';

const AddFriendTemplate: React.FC = () => {
  const onCopy: () => void = () => {
    navigator.clipboard
      .writeText(myInviteCode?.data?.inviteCode ?? '')
      .then(() => null)
      .catch(() => null);
  };

  const { data: myInviteCode } = useBaseQuery<{ inviteCode: string }>(
    queryKeys.MY_INVITE_CODE(),
    '/users/me/invite-code',
  );

  return (
    <div className="pt-[72px] px-[20px]">
      <LabelRoundBox
        label="내 초대 코드"
        content={
          <>
            <span className="flex-1 outline-none mr-[10px] border-none p-[10px] bg-gray1 rounded-[6px] text-gray8 body1-medium">
              {myInviteCode?.data?.inviteCode}
            </span>
            <MiniButton label="복사" onClick={onCopy} variant="active" />
          </>
        }
      />
      <LabelRoundBox
        label="상대 초대 코드 입력"
        content={
          <>
            <input
              placeholder="상대 초대 코드를 입력해주세요."
              className="flex-1 outline-none mr-[10px] border-none p-[10px] bg-gray1 rounded-[6px] text-gray8 body1-medium"
            />
            <MiniButton label="추가" onClick={onCopy} variant="clickable" />
          </>
        }
      />

      <BulletNoticeBox
        title={'친구 추가 및 입력 방법'}
        content={`복사 및 복사 아이콘을 눌러 초대 코드를 복사할 수 있습니다.
                <br /> 복사한 초대 코드는 친구 관계를 맺고자 하는 이에게 전달해주세요.`}
      />
      <BulletNoticeBox
        title={'상대에게 초대 코드 전달받을 시'}
        content={`상대 초대 코드 입력란에 입력하시면 상대방과 친구가 됩니다.
                <br /> 상대방과 친구가 된다면, 친구의 냉장고를 구경할 수 있습니다.`}
      />
    </div>
  );
};

export default AddFriendTemplate;
