import React from 'react';
import { ExclamationIcon } from '@/assets/icons';

interface AlertMessageProps {
  message: string;
  className?: string;
}

const ExclamationAlertSpan: React.FC<AlertMessageProps> = ({
  message,
  className,
}) => {
  return (
    <span
      className={`flex items-center gap-[4px] text-point4 body1-medium ${className}`}
    >
      <ExclamationIcon />
      {message}
    </span>
  );
};

export default ExclamationAlertSpan;
