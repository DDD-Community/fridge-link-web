import React from 'react';

const TabButton: React.FC<{
  onClick: () => void;
  active: boolean;
  label: string;
}> = ({ onClick, active, label }) => {
  return (
    <button
      className={`flex-1 py-[16px] heading4-semibold ${active ? 'border-b-2 border-b-primary1 text-primary1' : 'text-gray5'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
