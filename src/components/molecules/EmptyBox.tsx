import { EmptyIcon } from '@/assets/icons';
import React from 'react';

interface EmptyBoxProps {
  text: string;
}

const EmptyBox: React.FC<EmptyBoxProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 min-h-268">
      <EmptyIcon />
      <div className="body1-medium text-gray3">{text}</div>
    </div>
  );
};

export default EmptyBox;
