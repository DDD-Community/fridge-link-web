import React from 'react';
import { SettingIcon } from '@/assets/icons';

const FriendshipHeaderSettingButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <SettingIcon />
    </button>
  );
};

export default FriendshipHeaderSettingButton;
