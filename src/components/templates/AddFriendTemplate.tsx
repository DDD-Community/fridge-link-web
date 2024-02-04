import React, { useEffect, useState } from 'react';

import { BulletNoticeBox } from '../organisms';

const MY_INVITATION_CODE = 'AB12CD3EF';

const AddFriendTemplate: React.FC = () => {
  const [myCode, setMyCode] = useState<string>('');

  const onCopy: () => void = () => {
    navigator.clipboard
      .writeText(myCode)
      .then(() => null)
      .catch(() => null);
  };

  useEffect(() => {
    setMyCode(MY_INVITATION_CODE);
  }, []);

  return (
    <div className="pt-[72px] px-[20px]">
      <div className="mb-[20px] px-[20px] py-[16px] bg-white rounded-[12px]">
        <p className="mb-[12px] body1-semibold text-gray8">내 초대 코드</p>
        <div className="flex">
          <span className="flex-1 outline-none mr-[10px] border-none p-[10px] bg-gray1 rounded-[6px] text-gray8 body1-medium">
            {myCode}
          </span>

          <button
            onClick={onCopy}
            className="px-[16px] p-[10px] bg-primary2 rounded-[6px] text-white"
          >
            복사
          </button>
        </div>
      </div>

      <div className="mb-[20px] px-[20px] py-[16px] bg-white rounded-[12px]">
        <p className="mb-[12px] body1-semibold text-gray8">
          상대 초대 코드 입력
        </p>
        <div className="flex">
          <input
            placeholder="상대 초대 코드를 입력해주세요."
            className="flex-1 outline-none mr-[10px] border-none p-[10px] bg-gray1 rounded-[6px] text-gray8 body1-medium"
          />
          <button className="px-[16px] py-[10px] bg-white rounded-[6px] border border-gray3 text-gray3">
            추가
          </button>
        </div>
      </div>

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
