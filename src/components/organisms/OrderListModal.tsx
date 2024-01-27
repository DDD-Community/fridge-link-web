import React from 'react';
import { Button, ModalBottom } from '../atoms';
import { EmptyRadioSVG, FullRadioSVG } from '../atoms/Icon';

const OrderListModal: React.FC<{
  currentOrder: string;
  toggleIsOpenOrderListModal: () => void;
}> = ({ toggleIsOpenOrderListModal, currentOrder }) => {
  const ORDER_LIST = ['등록순', '이름순'];

  return (
    <ModalBottom blackClickHandler={toggleIsOpenOrderListModal}>
      <div className="w-full">
        {ORDER_LIST.map((order) => (
          <div className="flex flex-row items-center justify-between h-[70px]">
            {currentOrder === order ? (
              <>
                <div className="heading3-semibold">{order}</div>
                <FullRadioSVG />
              </>
            ) : (
              <>
                <div className="heading3-semibold text-gray5">{order}</div>
                <EmptyRadioSVG />
              </>
            )}
          </div>
        ))}
      </div>
      <Button className="w-full bg-primary2" text="선택 완료" />
    </ModalBottom>
  );
};

export default OrderListModal;
