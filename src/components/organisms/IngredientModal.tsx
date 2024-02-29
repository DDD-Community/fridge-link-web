import { BoxIcon, CalendarIcon, EditIcon, FreezerIcon, MemoIcon, TrashcanIcon } from '@/assets/icons';
import { Button, Toggle } from '@/components/atoms';
import { Counter, IngredientAddItemContainer } from '../molecules';
import React, { useEffect, useState } from 'react';
import {
  useDeleteIngredientById,
  useGetIngredientById,
  useGetMyIngredient,
  usePostIngredient,
} from '@/hooks/queries/fridge';

import type { CurrentFridgeInfoType } from '@/types/fridge';
import Image from 'next/image';
import ModalContainer from '../atoms/ModalContainer';
import type { PostIngredientBodyType } from '@/hooks/queries/fridge/usePostIngredient';
import axiosInstance from '@/api/axiosInstance';
import { queryClient } from '@/pages/_app';
import usePutIngredientById from '@/hooks/queries/fridge/usePutIngredientById';
import { useRouter } from 'next/router';
import useToast from '@/hooks/useToast';

const IngredientModal: React.FC<{
  id: number;
  isDetailModal?: boolean;
  ingredientsRefetch?: any;
  categoryImage?: string;
  category?: string;
  toggleIsOpenIngredientModal: () => void;
  currentFridgeInfo?: CurrentFridgeInfoType;
}> = ({
  id,
  categoryImage,
  currentFridgeInfo,
  toggleIsOpenIngredientModal,
  isDetailModal = false,
  category,
  ingredientsRefetch,
}) => {
  const router = useRouter();
  const today = new Date();

  const { fridgeid, name } = router.query;

  const { showToast } = useToast();

  const onSuccess = () => {
    toggleIsOpenIngredientModal();
    showToast('식자재 추가가 완료되었습니다.', 'success');
    ingredientsRefetch();
    queryClient.invalidateQueries({ queryKey: ['my_fridge'] });
  };

  const postIngredient = usePostIngredient(onSuccess, fridgeid as string, name as string);

  const data = id === 0 ? null : isDetailModal ? useGetMyIngredient(id) : useGetIngredientById(id);

  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + (data?.expirationDays ?? 0));

  const [isEditingName, setIsEditingName] = useState(false);
  const [reqBody, setReqBody] = useState<PostIngredientBodyType>({
    refrigeratorId: Number(fridgeid),
    ingredientId: id,
    name: data?.name ?? category ?? '',
    quantity: data?.quantity ?? 1,
    location: data?.location ?? 'FREEZING',
    memo: '',
    addDate: today,
    expirationDate: data?.expirationDate ? new Date(data?.expirationDate) : expirationDate,
    isDeleted: false,
  });

  const deleteIngredient = useDeleteIngredientById(id, currentFridgeInfo?.fridgeId as number, reqBody?.location, () => {
    ingredientsRefetch();
    toggleIsOpenIngredientModal();
  });
  const putIngredient = usePutIngredientById(id, currentFridgeInfo?.fridgeId as number, reqBody?.location, () => {
    ingredientsRefetch();
    toggleIsOpenIngredientModal();
  });

  const [isInFreezer, setIsInFreezer] = useState(reqBody?.location === 'REFRIGERATION');

  const toggleIsInFreezer: () => void = () => {
    setIsInFreezer((prev) => !prev);
  };

  const handleSubmit: () => void = () => {
    postIngredient.mutate({
      ...reqBody,
      location: isInFreezer ? 'REFRIGERATION' : 'FREEZING',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.post('/ingrs', {
        category,
        name: reqBody.name,
        iconImage: categoryImage,
        expirationDays: 0,
      });

      setReqBody((prev) => ({ ...prev, ingredientId: res.data.data }));
    };
    if (id === 0) fetchData();
  }, []);
  return (
    <ModalContainer>
      <div className="mb-[24px]">
        <div className="flex items-center gap-[12px] mb-[32px]">
          <Image src={data?.iconImage ?? categoryImage ?? ''} alt={data?.name ?? ''} width={48} height={48} />
          {isEditingName ? (
            <input
              className={`w-[100px] flex heading1-bold`}
              value={reqBody.name}
              onChange={(e) => {
                setReqBody((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
            />
          ) : (
            <div className="heading1-bold">{reqBody.name}</div>
          )}
          <button
            onClick={() => {
              setIsEditingName((prev) => !prev);
            }}
          >
            <EditIcon />
          </button>
        </div>
        <div className="flex flex-col gap-[10px] mb-[32px]">
          <IngredientAddItemContainer isRow={false} svgComponent={<CalendarIcon />} title="소비기한">
            <div className="flex items-center w-full gap-20">
              <input
                className="p-[13px] bg-white rounded-[6px] body1-medium text-center text-gray6 flex-grow"
                type="date"
                value={reqBody.addDate.toISOString().split('T')[0]}
                onChange={(e) => {
                  setReqBody((prev) => ({
                    ...prev,
                    addDate: new Date(e.target.value),
                  }));
                }}
              />
              <div className="body1-medium text-center text-gray6">~</div>
              <input
                className="p-[13px] bg-white rounded-[6px] body1-medium text-center text-gray6 flex-grow"
                type="date"
                value={reqBody.expirationDate.toISOString().split('T')[0]}
                onChange={(e) => {
                  setReqBody((prev) => ({
                    ...prev,
                    expirationDate: new Date(e.target.value),
                  }));
                }}
              />
            </div>
          </IngredientAddItemContainer>
          <IngredientAddItemContainer isRow={true} svgComponent={<BoxIcon />} title="수량">
            <Counter
              currentCount={reqBody.quantity}
              handleIncreaseCount={() => {
                setReqBody((prev) => ({
                  ...prev,
                  quantity: prev.quantity + 1,
                }));
              }}
              handleDecreaseCount={() => {
                setReqBody((prev) => ({
                  ...prev,
                  quantity: prev.quantity - 1,
                }));
              }}
            />
          </IngredientAddItemContainer>
          <IngredientAddItemContainer isRow={true} svgComponent={<FreezerIcon />} title="냉동보관">
            <Toggle isToggleOn={isInFreezer} onClick={toggleIsInFreezer} />
          </IngredientAddItemContainer>
          <IngredientAddItemContainer isRow={false} svgComponent={<MemoIcon />} title="메모">
            <input
              value={reqBody.memo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setReqBody((prev) => ({ ...prev, memo: e.target.value }));
              }}
              className="w-full p-[12px] rounded-[6px] body1-medium"
              placeholder="식자재 관련 정보를 입력해 주세요."
            />
          </IngredientAddItemContainer>
        </div>
        {isDetailModal ? (
          <div className="flex w-full gap-[8px]">
            <button
              className="p-[13px] border-2 rounded-[12px]"
              onClick={() => {
                deleteIngredient.mutate({});
              }}
            >
              <TrashcanIcon />
            </button>
            <Button
              className="flex-grow bg-primary2 text-white"
              text="수정완료"
              onClick={() => {
                putIngredient.mutate({
                  name: reqBody.name,
                  quantity: reqBody.quantity,
                  location: isInFreezer ? 'REFRIGERATION' : 'FREEZING',
                  memo: reqBody.memo,
                  addDate: reqBody.addDate,
                  expirationDate: reqBody.expirationDate,
                  isDeleted: false,
                });
              }}
            />
          </div>
        ) : (
          <Button className="w-full bg-primary2 text-white" text={'추가완료'} onClick={handleSubmit} />
        )}
      </div>
    </ModalContainer>
  );
};

export default IngredientModal;
