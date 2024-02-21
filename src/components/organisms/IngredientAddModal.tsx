import { BoxIcon, CalendarIcon, FreezerIcon, MemoIcon } from '@/assets/icons';
import { Button, Toggle } from '@/components/atoms';
import { Counter, IngredientAddItemContainer } from '../molecules';
import React, { useState } from 'react';
import useCount from '@/hooks/useCount';
import useToast from '@/hooks/useToast';
import ModalContainer from '../atoms/ModalContainer';
import {
  useGetIngredientById,
  usePostIngredient,
} from '@/hooks/queries/fridge';
import Image from 'next/image';
import type { PostIngredientBodyType } from '@/hooks/queries/fridge/usePostIngredient';

const IngredientAddModal: React.FC<{
  id: number;
  toggleIsOpenIngredientAddModal: () => void;
}> = ({ id, toggleIsOpenIngredientAddModal }) => {
  const { showToast } = useToast();

  const onSuccess = () => {
    toggleIsOpenIngredientAddModal();
    showToast('식자재 추가가 완료되었습니다.', 'success');
  };

  const postIngredient = usePostIngredient(onSuccess);

  const [reqBody, setReqBody] = useState<PostIngredientBodyType>({
    refrigeratorId: 0,
    ingredientId: 0,
    name: '',
    quantity: 0,
    location: 'FREEZING',
    memo: '',
    addDate: '2024-01-12',
    expirationDate: '2024-01-22',
    isDeleted: true,
  });

  const [isInFreezer, setIsInFreezer] = useState(false);
  const { currentCount, handleIncreaseCount, handleDecreaseCount } = useCount();

  const toggleIsInFreezer: () => void = () => {
    setIsInFreezer((prev) => !prev);
  };

  const handleSubmit: () => void = () => {
    postIngredient.mutate({ ...reqBody, quantity: currentCount });
  };

  const data = useGetIngredientById(id);

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
                placeholder="2024-01-12"
                type="date"
                value={reqBody.addDate}
                onChange={(e) => {
                  console.log(e.target.value);
                  setReqBody((prev) => ({
                    ...prev,
                    addDate: e.target.value,
                  }));
                }}
              />
              <div className="body1-medium text-center text-gray6">~</div>
              <input
                className="p-[13px] bg-white rounded-[6px] body1-medium text-center text-gray6 flex-grow"
                placeholder="2024-01-12"
                type="date"
                value={reqBody.expirationDate}
                onChange={(e) => {
                  console.log(e.target.value);
                  setReqBody((prev) => ({
                    ...prev,
                    expirationDate: e.target.value,
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
              currentCount={currentCount}
              handleIncreaseCount={handleIncreaseCount}
              handleDecreaseCount={handleDecreaseCount}
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
          text="추가완료"
          onClick={handleSubmit}
        />
      </div>
    </ModalContainer>
  );
};

export default IngredientAddModal;
