import React from 'react';

const InputLabelContainer: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ children, label }) => {
  return (
    <label className="flex justify-between items-center mb-[14px] body1-medium text-gray8 heading4-semibold">
      <span className="w-[80px]">{label}</span>
      {children}
    </label>
  );
};

export default InputLabelContainer;
