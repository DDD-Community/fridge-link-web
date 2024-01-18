import React from 'react';
import { GrayBox } from '../atoms';
import { EditSVG, EmptyRadioSVG, FullRadioSVG } from '../atoms/Icon';

interface FridgeListItemProps {
  isCurrentFridge: boolean;
  fridgeName: string;
  onClick: () => void;
}

const FridgeListItem: React.FC<FridgeListItemProps> = ({
  isCurrentFridge,
  fridgeName,
  onClick,
}) => {
  return (
    <GrayBox
      className="flex-row items-center justify-between h-[70px]"
      onClick={onClick}
    >
      <div className="flex gap-[9px] items-center">
        <div className="heading3-semibold">{fridgeName}</div>
        <div>
          <EditSVG />
        </div>
      </div>
      {isCurrentFridge ? <FullRadioSVG /> : <EmptyRadioSVG />}
    </GrayBox>
  );
};

export default FridgeListItem;
