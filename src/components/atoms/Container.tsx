import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-22 p-32 w-full rounded-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
