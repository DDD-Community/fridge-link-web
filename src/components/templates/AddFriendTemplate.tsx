import { LabelRoundBox, WarningLine } from '@/components/molecules';
import React, { useState } from 'react';
import {
  useAddFriendship,
  useGetMyInviteCode,
} from '@/hooks/queries/friendship';

import { BulletNoticeBox } from '@/components/organisms';
import { MiniButton } from '@/components/atoms';
import useToast from '@/hooks/useToast';

const FRIEND_ADD_SUCCESS_MESSAGE = '친구 추가가 완료되었습니다.';
const CODE_COPY_SUCCESS_MESSAGE = '초대 코드가 복사되었습니다.';

const AddFriendTemplate: React.FC = () => {
  const [friendInviteCode, setFriendInviteCode] = useState<string>('');
  const [warningVisible, setWarningVisible] = useState<boolean>(false);
  const { showToast } = useToast();
  const addFriendship = useAddFriendship({
    onSuccess: () => {
      showToast(FRIEND_ADD_SUCCESS_MESSAGE, 'success');
    },
  });

  const onCopy: () => void = () => {
    navigator.clipboard
      .writeText(myInviteCode ?? '')
      .then(() => {
        showToast(CODE_COPY_SUCCESS_MESSAGE, 'success');
      })
      .catch(() => null);
  };

  const onAddFriend = () => {
    if (friendInviteCode.length < 8) {
      setWarningVisible(true);
    } else {
      addFriendship.mutate({ inviteCode: friendInviteCode });
    }
  };

  const { inviteCode: myInviteCode } = useGetMyInviteCode();

  return (
    <div className="pt-[72px] px-[20px]">
      <LabelRoundBox
        label="내 초대 코드"
        content={
          <div className="flex">
            <span className="flex-1 outline-none mr-[10px] border-none p-[10px] bg-gray1 rounded-[6px] text-gray8 body1-medium">
              {myInviteCode ?? ''}
            </span>
            <MiniButton label="복사" onClick={onCopy} variant="active" />
          </div>
        }
      />
      <LabelRoundBox
        label="상대 초대 코드 입력"
        content={
          <>
            <div className="flex mb-[8px]">
              <input
                placeholder="상대 초대 코드를 입력해주세요."
                className={`flex-1 mr-[10px] p-[10px] bg-gray1 rounded-[6px] text-gray8 body1-medium ${warningVisible ? 'border border-point4' : 'border-none'}`}
                value={friendInviteCode}
                onChange={(e) => {
                  setFriendInviteCode(e.target.value);
                }}
                maxLength={10}
              />
              <MiniButton
                label="추가"
                onClick={onAddFriend}
                variant="clickable"
              />
            </div>
            {warningVisible ? (
              <WarningLine text="8-10자리 초대 코드를 입력해주세요." />
            ) : null}
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
