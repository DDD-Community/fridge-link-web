import { CameraIcon, CircleClose } from '@/assets/icons';
import { Button, Input } from '@/components/atoms';
import { Counter } from '@/components/molecules';
import {
  Header,
  InputLabelContainer,
  InputSectionContainer,
} from '@/components/organisms';
import useCount from '@/hooks/useCount';
import { type NextPage } from 'next';
import Image from 'next/image';
import React, { type ChangeEvent, useState } from 'react';

const AddSharePage: NextPage = () => {
  const { currentCount, handleIncreaseCount, handleDecreaseCount } = useCount();
  const [selectedImage, setSelectedImage] = useState<File | null>();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);

    setSelectedImage(targetFilesArray[0]);
  };

  const onRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className={'pt-[52px] min-h-screen bg-white'}>
      <Header headerTitle={'나눔글 작성'} backgroundColor="white" />
      <div className="pt-[16px] px-[20px]">
        <InputSectionContainer title={'제목'}>
          <Input placeholder="제목" className="w-full mt-[14px]" />
        </InputSectionContainer>

        <InputSectionContainer
          title={'식자재 정보'}
          className="mt-[38px] mb-[14px]"
        >
          <InputLabelContainer label="종류">
            <Input
              placeholder="냉장고에서 식자재 가져오기"
              className="w-full mt-[14px] text-right"
            />
          </InputLabelContainer>
          <InputLabelContainer label="소비기한">
            <Input placeholder="2024.00.00" className="w-full text-right" />
          </InputLabelContainer>
        </InputSectionContainer>

        <InputSectionContainer
          title={'약속 정보'}
          className="mt-[40px] mb-[14px]"
        >
          <InputLabelContainer label="날짜">
            <Input
              placeholder="냉장고에서 식자재 가져오기"
              className="w-full mt-[14px] text-right"
            />
          </InputLabelContainer>
          <InputLabelContainer label="시간">
            <Input placeholder="2024.00.00" className="w-full text-right" />
          </InputLabelContainer>
          <InputLabelContainer label="장소">
            <Input placeholder="2024.00.00" className="w-full text-right" />
          </InputLabelContainer>
        </InputSectionContainer>

        <InputSectionContainer
          title={'모집인원'}
          className="flex justify-between items-center mt-[40px] mb-[14px]"
        >
          <Counter
            currentCount={currentCount}
            handleIncreaseCount={handleIncreaseCount}
            handleDecreaseCount={handleDecreaseCount}
          />
        </InputSectionContainer>

        <InputSectionContainer
          title={'상세 설명'}
          className="mt-[40px] mb-[14px]"
        >
          <textarea
            placeholder="나눔할 식자재에 대한 내용을 작성해 주세요."
            className="w-full h-[138px] mt-[14px] px-[20px] py-[14px] border border-gray3 outline-none rounded-[6px] text-gray4 body1-medium"
          ></textarea>
        </InputSectionContainer>

        <InputSectionContainer
          title={'사진 등록'}
          className="mt-[40px] mb-[14px]"
        >
          <div className="flex">
            <label
              htmlFor="file"
              className="flex justify-center items-center w-[70px] aspect-square border rounded-[6px] "
            >
              <div>
                <CameraIcon />
                <p className="body2-medium text-gray4">0/1</p>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={(e) => {
                    onChangeFile(e);
                  }}
                />
              </div>
            </label>

            {selectedImage ? (
              <div className="relative w-[70px] ml-[8px] aspect-square border rounded-[6px]">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="post"
                  width={100}
                  height={100}
                  className="rounded-lg aspect-square"
                />

                <button
                  className="absolute top-[-8px] right-[-9px]"
                  onClick={onRemoveImage}
                >
                  <CircleClose />
                </button>
              </div>
            ) : null}
          </div>
        </InputSectionContainer>

        <div>
          <Button
            text="작성 완료"
            className="w-full my-[30px] bg-primary2 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSharePage;
