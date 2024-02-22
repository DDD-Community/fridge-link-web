import { GrayBox, Radio } from '../atoms';

import { EditIcon } from '@/assets/icons';
import React from 'react';

interface FridgeListItemProps {
  isCurrentFridge: boolean;
  fridgeName: string;
  onClick: () => void;
  isMine: boolean;
}

const FridgeListItem: React.FC<FridgeListItemProps> = ({
  isCurrentFridge,
  fridgeName,
  onClick,
  isMine = true,
}) => {
  return (
    <GrayBox
      className="flex-row items-center justify-between h-[70px]"
      onClick={onClick}
    >
      <div className="flex gap-[9px] items-center">
        <div className="heading3-semibold">{fridgeName}</div>
        {isMine && (
          <div>
            <EditIcon />
          </div>
        )}
      </div>
      <Radio checked={isCurrentFridge} />
    </GrayBox>
  );
};

export default FridgeListItem;
