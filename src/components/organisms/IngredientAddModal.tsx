import React from 'react';
import { ModalBottom } from '@/components/atoms';

const IngredientAddModal: React.FC<{
  toggleIsOpenIngredientAddModal: () => void;
}> = ({ toggleIsOpenIngredientAddModal }) => {
  return (
    <ModalBottom blackClickHandler={toggleIsOpenIngredientAddModal}>
      <div>hi</div>
    </ModalBottom>
  );
};

export default IngredientAddModal;
