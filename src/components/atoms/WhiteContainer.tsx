import React from 'react';

interface WhiteContainerProps {
  children: React.ReactNode;
  className?: string;
}

const WhiteContainer: React.FC<WhiteContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-22 p-32  w-full bg-white rounded-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default WhiteContainer;
