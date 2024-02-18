import { type NextPage } from 'next';
import Image from 'next/image';
import ProfileImg from '@/assets/profile.png';
import { Button, ExclamationAlertSpan } from '@/components/atoms';
import React, { useCallback, useState } from 'react';
import Header from '@/components/organisms/Header';
import { debounceFunction } from '@/utils/debounceUtil';
import usePostUser from '@/hooks/queries/login/usePostUser';

const PROPILES = [
  {
    string: 'GREEN',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/green-nor.svg',
  },
  {
    string: 'RED',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/red-nor.svg',
  },
  {
    string: 'BLUE',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/blue-nor.svg',
  },
  {
    string: 'YELLOW',
    imgUrl:
      'https://mara-s3bucket.s3.ap-northeast-2.amazonaws.com/images/profiles/yellow-nor.svg',
  },
];

const FriendsListPage: NextPage = () => {
  const [selectedImageSrc, setSelectedImageSrc] = useState(ProfileImg);
  const [nickname, setNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  const postUser = usePostUser();

  const handleImageClick: (src: string) => void = (src) => {
    // imgURL로 변경
    console.log('선택한이미지SRC', src);
    setSelectedImageSrc(ProfileImg);
  };

  const handleNicknameChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void = (e) => {
    setNickname(e.target.value);
    setIsNicknameChecked(false);

    void debouncedHandleNicknameChange(e.target.value);
  };

  const debouncedHandleNicknameChange = useCallback(
    debounceFunction((currentNickname: string) => {
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
      profileImage: 'BLUE',
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
          src={selectedImageSrc}
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
              {PROPILES.map((profile) => (
                <Image
                  className="cursor-pointer"
                  src={profile.imgUrl}
                  alt="프로필 이미지"
                  width={52}
                  height={52}
                  onClick={() => {
                    handleImageClick(profile.string);
                  }}
                />
              ))}
            </div>
          </div>
        </form>
        <Button
          onClick={handleSumbit}
          className={`${nickname && isNicknameAvailable && selectedImageSrc ? 'bg-primary2' : 'bg-gray3'} mt-[205px] text-white`}
          text="편집 완료"
        />
      </section>
    </div>
  );
};

export default FriendsListPage;
