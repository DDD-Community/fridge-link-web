import { Button, ModalBottom, Radio } from '../atoms';

import React from 'react';

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
            <div className="heading3-semibold text-gray5">{order}</div>
            <Radio checked={currentOrder === order} />
          </div>
        ))}
      </div>
      <Button className="w-full bg-primary2" text="선택 완료" />
    </ModalBottom>
  );
};

export default OrderListModal;
