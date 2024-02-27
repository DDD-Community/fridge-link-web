import { type NextPage } from 'next';
import Image from 'next/image';
import { ExclamationAlertSpan } from '@/components/atoms';
import React, { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import Header from '@/components/organisms/Header';
import { debounceFunction } from '@/utils/debounceUtil';
import usePostUser from '@/hooks/queries/login/usePostUser';
import { useGetMe, usePutMe } from '@/hooks/queries/mypage';
import type { ProfileEnum } from '@/types/common';
import axiosInstance from '@/api/axiosInstance';
import { returnProfileImg } from '@/utils/returnProfileImg';

const PROFILES: Array<{ string: ProfileEnum; pointColor: string }> = [
  {
    string: 'GREEN',
    pointColor: '#3CAA8D',
  },
  {
    string: 'RED',
    pointColor: '#CB5D45',
  },
  {
    string: 'BLUE',
    pointColor: '#5C93D4',
  },
  {
    string: 'YELLOW',
    pointColor: '#D5B02D',
  },
];

const ProfilePage: NextPage = () => {
  const MyInfo = useGetMe();

  const [selectedProfile, setSelectedProfile] = useState<ProfileEnum>('BLUE');
  const [nickname, setNickname] = useState(MyInfo?.nickname ?? '');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<
    null | boolean
  >(null);
  const [isNicknameChecked, setIsNicknameChecked] = useState<null | boolean>(
    null,
  );

  const putMe = usePutMe();

  const postUser = usePostUser();

  const handleNicknameChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void = (e) => {
    setNickname(e.target.value);
    setIsNicknameChecked(false);
    void debouncedHandleNicknameChange(e.target.value);
  };

  const nickNameCheckResult = async (nickName: string) => {
    if (MyInfo?.nickname === nickName) {
      setIsNicknameAvailable(null);
      setIsNicknameChecked(null);
      return;
    }
    try {
      const res = await axiosInstance.get<{
        message: 'string';
        data: {
          isDuplicated: boolean;
        };
      }>(`/users/nickname/check?nickname=${nickName}`);
      setIsNicknameChecked(true);
      setIsNicknameAvailable(!res?.data?.data.isDuplicated);
    } catch (error) {
      console.error('Error checking nickname:', error);
    }
  };

  const debouncedHandleNicknameChange = useCallback(
    debounceFunction((currentNickname: string) => {
      void nickNameCheckResult(currentNickname);
    }, 1000),
    [],
  );

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();

    const urlParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : null;
    const kakaoId = urlParams?.get('kakaoId');
    const kakaoEmail = urlParams?.get('kakaoEmail');

    if (kakaoEmail && kakaoId) {
      postUser.mutate({
        nickName: nickname,
        kakaoId: Number(kakaoId ?? MyInfo.kakaoId),
        kakaoEmail: kakaoEmail ?? MyInfo.kakaoEmail,
        googleEmail: null,
        profileImage: selectedProfile,
      });
    } else {
      putMe.mutate({ nickname, profileImage: selectedProfile });
    }
  };

  return (
    <div className={'bg-white pt-[52px] min-h-screen'}>
      <Header headerTitle={'프로필'} backgroundColor="white" />
      <section
        className={`flex flex-col items-center gap-[20px] min-h-screen p-20 bg-white`}
      >
        <Image
          className="m-[50px]"
          src={returnProfileImg(selectedProfile)}
          alt="프로필 이미지"
          width={120}
          height={120}
        />
        <form
          onSubmit={handleSumbit}
          className={`w-full flex flex-col h-full justify-between`}
        >
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
              {PROFILES.map(({ string, pointColor }) => (
                <Image
                  key={string}
                  style={
                    selectedProfile === string
                      ? { border: `solid 2px ${pointColor}` }
                      : {}
                  }
                  className={`rounded-[50%] cursor-pointer`}
                  src={returnProfileImg(string)}
                  alt="프로필 이미지"
                  width={50}
                  height={50}
                  onClick={() => {
                    setSelectedProfile(string);
                  }}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={`p-18 gap-12 rounded-12 heading4-semibold ${(MyInfo?.nickname !== nickname && MyInfo.profileImage === selectedProfile) || (MyInfo?.nickname === nickname && MyInfo.profileImage !== selectedProfile) || (isNicknameAvailable && selectedProfile) ? 'bg-primary2' : 'bg-gray3'} mt-[205px] text-white`}
          >
            편집완료
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProfilePage;
