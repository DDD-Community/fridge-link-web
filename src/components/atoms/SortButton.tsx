import { AngleIcon } from '@/assets/icons';
import React from 'react';

const SortButton: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="flex justify-center items-center">
      <span className="mr-[4px] text-gray5">{label}</span>
      <AngleIcon
        width={14}
        height={14}
        fill="#9299AA"
        transform="rotate(270deg)"
        style={{ transform: 'rotate(270deg)' }}
      />
    </button>
  );
};

export default SortButton;
