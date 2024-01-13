import React from 'react';

interface WhiteBoxProps {
  children: React.ReactNode;
}

const WhiteBox: React.FC<WhiteBoxProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default WhiteBox;
