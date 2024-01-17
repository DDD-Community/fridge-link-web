import React from 'react';

interface BorderTabProps {
  tabName: string;
  isActive: boolean;
  clickHandler?: () => void;
  className?: string;
}
const BorderTab: React.FC<BorderTabProps> = ({
  tabName,
  isActive,
  className,
}) => {
  return (
    <div
      className={`bg-white w-full border-2 p-[8px] text-center rounded-[24px] ${className} ${
        isActive ? 'border-primary2 z-10' : 'border-gray-200'
      }`}
    >
      {tabName}
    </div>
  );
};

export default BorderTab;
