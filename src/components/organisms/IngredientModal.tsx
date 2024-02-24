import { BoxIcon, CalendarIcon, FreezerIcon, MemoIcon } from '@/assets/icons';
import { Button, Toggle } from '@/components/atoms';
import { Counter, IngredientAddItemContainer } from '../molecules';
import React, { useState } from 'react';
import useToast from '@/hooks/useToast';
import ModalContainer from '../atoms/ModalContainer';
import {
  useGetIngredientById,
  useGetMyIngredient,
  usePostIngredient,
} from '@/hooks/queries/fridge';
import Image from 'next/image';
import type { PostIngredientBodyType } from '@/hooks/queries/fridge/usePostIngredient';
import { useRouter } from 'next/router';

const IngredientModal: React.FC<{
  id: number;
  isDetailModal?: boolean;
  toggleIsOpenIngredientModal: () => void;
}> = ({ id, toggleIsOpenIngredientModal, isDetailModal = false }) => {
  const router = useRouter();
  const today = new Date();

  const { fridgeid, name } = router.query;

  const { showToast } = useToast();

  const onSuccess = () => {
    toggleIsOpenIngredientModal();
    showToast('식자재 추가가 완료되었습니다.', 'success');
  };

  const postIngredient = usePostIngredient(
    onSuccess,
    fridgeid as string,
    name as string,
  );

  const data = isDetailModal
    ? useGetMyIngredient(id)
    : useGetIngredientById(id);

  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + (data?.expirationDays ?? 0));

  const [reqBody, setReqBody] = useState<PostIngredientBodyType>({
    refrigeratorId: Number(fridgeid),
    ingredientId: id,
    name: data?.name ?? '',
    quantity: data?.quantity ?? 0,
    location: data?.location ?? 'FREEZING',
    memo: '',
    addDate: today,
    expirationDate: data?.expirationDate
      ? new Date(data?.expirationDate)
      : expirationDate,
    isDeleted: false,
  });

  const [isInFreezer, setIsInFreezer] = useState(false);

  const toggleIsInFreezer: () => void = () => {
    setIsInFreezer((prev) => !prev);
  };

  const handleSubmit: () => void = () => {
    postIngredient.mutate({
      ...reqBody,
      location: isInFreezer ? 'REFRIGERATION' : 'FREEZING',
    });
  };

  return (
    <ModalContainer>
      <div className="mb-[24px]">
        <div className="flex items-center gap-[12px] mb-[32px]">
          <Image
            src={data?.iconImage ?? ''}
            alt={data?.name ?? ''}
            width={48}
            height={48}
          />
          <div className="heading1-bold">{data?.name}</div>
        </div>
        <div className="flex flex-col gap-[10px] mb-[32px]">
          <IngredientAddItemContainer
            isRow={false}
            svgComponent={<CalendarIcon />}
            title="소비기한"
          >
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
          <IngredientAddItemContainer
            isRow={true}
            svgComponent={<BoxIcon />}
            title="수량"
          >
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
          <IngredientAddItemContainer
            isRow={true}
            svgComponent={<FreezerIcon />}
            title="냉동보관"
          >
            <Toggle isToggleOn={isInFreezer} onClick={toggleIsInFreezer} />
          </IngredientAddItemContainer>
          <IngredientAddItemContainer
            isRow={false}
            svgComponent={<MemoIcon />}
            title="메모"
          >
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
        <Button
          className="w-full bg-primary2 text-white"
          text={isDetailModal ? '삭제하기' : '추가완료'}
          onClick={handleSubmit}
        />
      </div>
    </ModalContainer>
  );
};

export default IngredientModal;
