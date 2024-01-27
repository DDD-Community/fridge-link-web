import { type NextPage } from 'next';
import Image from 'next/image';
import ProfileImg from '@/assets/Property=1, State=nor.png';
import ExclamationSVG from '@/assets/my/exclamation.svg';
import { Button } from '@/components/atoms';
import React, { useEffect, useState } from 'react';

const FriendsListPage: NextPage = () => {
  const [selectedImageSrc, setSelectedImageSrc] = useState(ProfileImg);
  const [nickname, setNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [delayedRequest, setDelayedRequest] = useState<any>(undefined); // NodeJS.Timeout..

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

    if (delayedRequest) {
      clearTimeout(delayedRequest);
    }

    const timeoutId = setTimeout(() => {
      if (nickname && !isNicknameChecked) {
        console.log('변경할 닉네임', nickname);
        setIsNicknameChecked(true);
        setIsNicknameAvailable(true);
      }
    }, 500);

    setDelayedRequest(timeoutId);
  };

  useEffect(() => {
    return () => {
      if (delayedRequest) {
        clearTimeout(delayedRequest);
      }
    };
  }, [delayedRequest]);

  return (
    <div className={'bg-white pt-[52px] min-h-screen'}>
      <div
        className={`flex justify-center items-center fixed top-0 w-screen max-w-[480px] py-[12px] px-[20px] z-[1000]`}
      >
        <div
          onClick={() => {
            window.history.back();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.6446 1.41789C15.0351 1.80842 15.0351 2.44158 14.6446 2.83211L7.47671 10L14.6446 17.1679C15.0351 17.5584 15.0351 18.1916 14.6446 18.5821C14.2541 18.9726 13.6209 18.9726 13.2304 18.5821L4.64828 10L13.2304 1.41789C13.6209 1.02737 14.2541 1.02737 14.6446 1.41789Z"
              fill="#363A45"
            />
          </svg>
        </div>
        <div className="flex justify-center text-center w-full">
          <p className="heading3-bold text-gray8 pt-1">프로필</p>
        </div>
      </div>
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
              className="mb-[11px]"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={handleNicknameChange}
            />
            {isNicknameChecked &&
              (isNicknameAvailable ? (
                <span className="text-primary2 body1-medium">
                  사용가능한 닉네임입니다.
                </span>
              ) : (
                <div className="flex items-center gap-[4px] text-point4 body1-medium">
                  <ExclamationSVG />
                  중복되는 닉네임이에요. 다시 작성해주세요.
                </div>
              ))}
            <label className="mt-[60px] mb-[20px]">프로필 이미지 선택</label>
            <div className="flex gap-[12px]">
              <Image
                className="cursor-pointer"
                src={ProfileImg}
                alt="프로필 이미지"
                width={52}
                height={52}
                onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                  handleImageClick(e.currentTarget.src);
                }}
              />
              <Image
                className="cursor-pointer"
                src={ProfileImg}
                alt="프로필 이미지"
                width={52}
                height={52}
                onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                  handleImageClick(e.currentTarget.src);
                }}
              />
              <Image
                className="cursor-pointer"
                src={ProfileImg}
                alt="프로필 이미지"
                width={52}
                height={52}
                onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                  handleImageClick(e.currentTarget.src);
                }}
              />
              <Image
                className="cursor-pointer"
                src={ProfileImg}
                alt="프로필 이미지"
                width={52}
                height={52}
                onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                  handleImageClick(e.currentTarget.src);
                }}
              />
            </div>
          </div>
          <Button
            className={`${nickname && isNicknameAvailable && selectedImageSrc ? 'bg-primary2' : 'bg-gray3'} mt-[205px] text-white`}
            text="편집 완료"
          />
        </form>
      </section>
    </div>
  );
};

export default FriendsListPage;
