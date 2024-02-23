import { GrayBox, Radio } from '../atoms';

import { EditIcon } from '@/assets/icons';
import { usePutFridgeById } from '@/hooks/queries/fridge';
import React from 'react';

interface FridgeListItemProps {
  isCurrentFridge: boolean;
  fridgeName: string;
  onClick: () => void;
  isMine: boolean;
  isEditingFridgeName?: boolean;
  id?: number;
  handleNewFridgeName?: (id: number, name: string) => void;
  newFridgeName: { id: number; name: string };
  togglesetIsEditingFridgeName?: () => void;
}

const FridgeListItem: React.FC<FridgeListItemProps> = ({
  isCurrentFridge,
  fridgeName,
  onClick,
  isMine = true,
  id,
  newFridgeName = { id: 0, name: '' },
  handleNewFridgeName = () => {},
  isEditingFridgeName = false,
  togglesetIsEditingFridgeName = () => {},
}) => {
  const putFridgeName = usePutFridgeById(id as number);

  const handlePutFridgeClick = () => {
    putFridgeName.mutate({ name: newFridgeName.name });
  };

  console.log(isEditingFridgeName);
  console.log(newFridgeName);
  return (
    <GrayBox
      className="flex-row items-center justify-between h-[70px]"
      onClick={onClick}
    >
      <div className="flex gap-[9px] items-center">
        {isEditingFridgeName && id === newFridgeName.id ? (
          <input
            value={newFridgeName.name}
            onChange={(e) => {
              handleNewFridgeName(id, e.target.value);
            }}
          />
        ) : (
          <div className="heading3-semibold">{fridgeName}</div>
        )}
        {isMine && (
          <button
            onClick={() => {
              if (!newFridgeName.name) {
                handleNewFridgeName(id as number, fridgeName);
                togglesetIsEditingFridgeName();
              } else {
                if (!newFridgeName.name) {
                  togglesetIsEditingFridgeName();
                  return;
                }
                handlePutFridgeClick();
                handleNewFridgeName(id as number, fridgeName);
                togglesetIsEditingFridgeName();
              }
            }}
          >
            <EditIcon />
          </button>
        )}
      </div>
      <Radio checked={isCurrentFridge} />
    </GrayBox>
  );
};

export default FridgeListItem;
