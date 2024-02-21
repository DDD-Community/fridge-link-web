import { type NextPage } from 'next';
import Image from 'next/image';
import { Button, ExclamationAlertSpan } from '@/components/atoms';
import React, { useCallback, useState } from 'react';
import Header from '@/components/organisms/Header';
import { debounceFunction } from '@/utils/debounceUtil';
import usePostUser from '@/hooks/queries/login/usePostUser';
import { PROPILE_URLS } from '@/constants/PROFILE_URLS';
import { useGetMe } from '@/hooks/queries/mypage';
import type { ProfileType } from '@/types/common';

const FriendsListPage: NextPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>('BLUE');
  const [nickname, setNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  const MyInfo = useGetMe();

  if (MyInfo.nickName) {
    setNickname(MyInfo.nickName);
  }

  const postUser = usePostUser();

  const handleNicknameChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void = (e) => {
    setNickname(e.target.value);
    setIsNicknameChecked(false);
    void debouncedHandleNicknameChange(e.target.value);
  };

  const debouncedHandleNicknameChange = useCallback(
    debounceFunction((currentNickname: string) => {
      console.log(currentNickname);
      setIsNicknameChecked(true);
      setIsNicknameAvailable(false);
    }, 1000),
    [],
  );

  const handleSumbit = () => {
    const urlParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : null;
    const kakaoId = Number(urlParams?.get('kakaoId'));
    const kakaoEmail = urlParams?.get('kakaoEmail');

    if (!kakaoId || !kakaoEmail) return;

    postUser.mutate({
      nickName: nickname,
      kakaoId,
      kakaoEmail,
      googleEmail: '',
      profileImage: selectedProfile,
    });
  };

  return (
    <div className={'bg-white pt-[52px] min-h-screen'}>
      <Header headerTitle={'프로필'} backgroundColor="white" />
      <section
        className={`flex flex-col items-center gap-[20px] min-h-screen p-20 bg-white`}
      >
        <Image
          className="m-[50px]"
          src={PROPILE_URLS[selectedProfile].imgUrl}
          alt="프로필 이미지"
          width={120}
          height={120}
        />
        <form className={`w-full flex flex-col h-full justify-between`}>
          <div className={`flex flex-col`}>
            <label className="body1-medium mb-[20px]">닉네임</label>
            <input
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={handleNicknameChange}
            />
            <div
              className={`w-full h-[2px] bg-gray2 mb-[11px] ${
                isNicknameChecked &&
                (isNicknameAvailable ? 'bg-primary2' : 'bg-point4')
              }`}
            />
            {isNicknameChecked &&
              (isNicknameAvailable ? (
                <span className="text-primary2 body1-medium">
                  사용가능한 닉네임입니다.
                </span>
              ) : (
                <ExclamationAlertSpan
                  message={'중복되는 닉네임이에요. 다시 작성해주세요.'}
                />
              ))}
            <label className="mt-[60px] mb-[20px]">프로필 이미지 선택</label>
            <div className="flex gap-[12px]">
              {Object.entries(PROPILE_URLS).map(
                ([, { string, imgUrl, pointColor }]) => (
                  <Image
                    style={{ border: `solid 2px ${pointColor}` }}
                    className={`rounded-[50%] cursor-pointer`}
                    src={imgUrl}
                    alt="프로필 이미지"
                    width={50}
                    height={50}
                    onClick={() => {
                      setSelectedProfile(string);
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </form>
        <Button
          onClick={handleSumbit}
          className={`${nickname && isNicknameAvailable && selectedProfile ? 'bg-primary2' : 'bg-gray3'} mt-[205px] text-white`}
          text="편집 완료"
        />
      </section>
    </div>
  );
};

export default FriendsListPage;
