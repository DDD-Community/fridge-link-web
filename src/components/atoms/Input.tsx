import React from 'react';

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ ...props }) => {
  return (
    <input
      {...props}
      className={`px-[20px] py-[10px] border border-gray3 outline-none rounded-[6px] body1-regular text-gray8 ${props.className ?? ''}`}
    />
  );
};

export default Input;
