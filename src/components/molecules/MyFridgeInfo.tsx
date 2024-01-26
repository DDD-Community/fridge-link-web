import React from 'react';

const MyFridgeInfo: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col gap-[12px] items-center text-white p-[18px]">
      <label className="body1-medium">{label}</label>
      <div className="heading4-semibold">{value}</div>
    </div>
  );
};

export default MyFridgeInfo;
