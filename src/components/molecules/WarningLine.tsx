import React from 'react';
import { WarningIcon } from '@/assets/icons';

const WarningLine: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center">
      <WarningIcon />
      <p className="ml-[4px] body2-regular text-point4">{text}</p>
    </div>
  );
};

export default WarningLine;
