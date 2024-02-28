import { Button, Input } from '@/components/atoms';
import { CameraIcon, CircleCloseIcon, SearchIcon } from '@/assets/icons';
import { Header, InputLabelContainer, InputSectionContainer } from '@/components/organisms';
import React, { useCallback, useState } from 'react';

import type { ChangeEvent } from 'react';
import { Counter } from '@/components/molecules';
import Image from 'next/image';
import type { IngredientDetailType } from '@/types/fridge';
import type { NextPage } from 'next';
import { SelectIngredientTemplate } from '@/components/templates';
import dayjs from 'dayjs';
import useCount from '@/hooks/useCount';
import { usePostShare } from '@/hooks/queries/share';
import usePostUpload from '@/hooks/queries/share/usePostUpload';

interface AddShareData {
  title: string;
  content: string;
  shareTime: string;
  shareDate: string;
  location: string;
}
const AddSharePage: NextPage = () => {
  const { currentCount, handleIncreaseCount, handleDecreaseCount } = useCount();
  const [selectedImage, setSelectedImage] = useState<File | null>();
  const [selectIngredientVisible, setSelectIngrediendtVisible] = useState<boolean>(false);
  const [selectedIngredientInfo, setSelectedIngredientInfo] = useState<IngredientDetailType>();
  const [data, setData] = useState<AddShareData>({
    title: '',
    shareDate: '',
    shareTime: '12:00:00',
    location: '',
    content: '',
  });
  const imageUpload = usePostUpload({
    onSuccess: (res) => {
      onSubmit(res);
    },
  });

  const addShare = usePostShare();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);

    setSelectedImage(targetFilesArray[0]);
  };

  const onRemoveImage = () => {
    setSelectedImage(null);
  };

  const onUploadImage = useCallback(() => {
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    imageUpload.mutate(formData);
  }, [selectedImage]);

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<any>) => {
      const { value, name } = e.target;
      console.log(e.target);
      setData({
        ...data,
        [name]: value,
      });
    },
    [data],
  );

  const onSubmit = useCallback(
    (image: string) => {
      console.log(data);
      const body = {
        title: data.title,
        ingredientDetailId: selectedIngredientInfo?.ingredientDetailId as number,
        content: data.content,
        shareTime: data.shareTime,
        shareDate: data.shareDate,
        limitPerson: currentCount,
        location: data.location,
        status: 'SHARE_START',
        thumbnailImage: image,
      };

      addShare.mutate(body);
    },
    [data],
  );

  if (selectIngredientVisible) {
    return (
      <SelectIngredientTemplate
        setSelectedIngredientInfo={setSelectedIngredientInfo}
        onCloseSelectIngredient={() => {
          setSelectIngrediendtVisible(false);
        }}
      />
    );
  }

  return (
    <div className={'pt-[52px] min-h-screen bg-white'}>
      <Header headerTitle={'나눔글 작성'} backgroundColor="white" />
      <div className="pt-[16px] px-[20px]">
        <InputSectionContainer title={'제목'}>
          <Input
            placeholder="제목"
            className="w-full mt-[14px]"
            name="title"
            value={data?.title}
            onChange={onChangeValue}
          />
        </InputSectionContainer>

        <InputSectionContainer title={'식자재 정보'} className="mt-[38px] mb-[14px]">
          <InputLabelContainer label="종류">
            <Input
              placeholder="냉장고에서 식자재 가져오기"
              className="flex flex-1 mt-[14px] text-right"
              name="ingredientDetailId"
              value={selectedIngredientInfo?.name ?? ''}
              onChange={onChangeValue}
            />
            <button
              onClick={() => {
                setSelectIngrediendtVisible(true);
              }}
              className="p-[10px] mt-[14px] ml-[4px] border border-primary1 rounded-[6px]"
            >
              <SearchIcon width={20} height={20} stroke="#52C5A6" />
            </button>
          </InputLabelContainer>
          <InputLabelContainer label="소비기한">
            <Input
              placeholder="2024.00.00"
              className="w-full text-right"
              value={
                selectedIngredientInfo?.expirationDate
                  ? dayjs(selectedIngredientInfo?.expirationDate).format('YYYY.MM.DD')
                  : ''
              }
            />
          </InputLabelContainer>
        </InputSectionContainer>

        <InputSectionContainer title={'약속 정보'} className="mt-[40px] mb-[14px]">
          <InputLabelContainer label="날짜">
            <Input
              className="w-full mt-[14px] text-right"
              type="date"
              name="shareDate"
              value={data?.shareDate}
              onChange={onChangeValue}
            />
          </InputLabelContainer>
          <InputLabelContainer label="시간">
            <Input
              placeholder="14:00"
              className="w-full text-right"
              name="shareTime"
              value={data?.shareTime}
              onChange={onChangeValue}
            />
          </InputLabelContainer>
          <InputLabelContainer label="장소">
            <Input
              placeholder="ex) 공덕역 4번 출구"
              className="w-full text-right"
              name="location"
              value={data?.location}
              onChange={onChangeValue}
            />
          </InputLabelContainer>
        </InputSectionContainer>

        <InputSectionContainer title={'모집인원'} className="flex justify-between items-center mt-[40px] mb-[14px]">
          <Counter
            currentCount={currentCount}
            handleIncreaseCount={handleIncreaseCount}
            handleDecreaseCount={handleDecreaseCount}
          />
        </InputSectionContainer>

        <InputSectionContainer title={'상세 설명'} className="mt-[40px] mb-[14px]">
          <textarea
            placeholder="나눔할 식자재에 대한 내용을 작성해 주세요."
            className="w-full h-[138px] mt-[14px] px-[20px] py-[14px] border border-gray3 outline-none rounded-[6px] body1-medium"
            maxLength={60}
            name="content"
            value={data?.content}
            onChange={onChangeValue}
          />
        </InputSectionContainer>

        <InputSectionContainer title={'사진 등록'} className="mt-[40px] mb-[14px]">
          <div className="flex mt-[12px]">
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

                <button className="absolute top-[-8px] right-[-9px]" onClick={onRemoveImage}>
                  <CircleCloseIcon />
                </button>
              </div>
            ) : null}
          </div>
        </InputSectionContainer>

        <div>
          <Button text="작성 완료" className="w-full my-[30px] bg-primary2 text-white" onClick={onUploadImage} />
        </div>
      </div>
    </div>
  );
};

export default AddSharePage;
