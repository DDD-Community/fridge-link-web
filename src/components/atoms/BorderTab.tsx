import React from 'react';

interface BorderTabProps {
  tabName: '냉장' | '냉동';
  currentTabName: '냉장' | '냉동';
  handleTabNameChange: (tabName: '냉장' | '냉동') => void;
  clickHandler?: () => void;
  className?: string;
}
const BorderTab: React.FC<BorderTabProps> = ({
  tabName,
  className,
  currentTabName,
  handleTabNameChange,
}) => {
  return (
    <div
      className={`bg-white w-full border-2 p-[8px] text-center rounded-[24px] ${className} ${
        currentTabName === tabName ? 'border-primary2 z-10' : 'border-gray-200'
      }`}
      onClick={() => {
        handleTabNameChange(tabName);
      }}
    >
      {tabName}
    </div>
  );
};

export default BorderTab;
