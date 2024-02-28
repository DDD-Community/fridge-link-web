import React from 'react';

const VerticalLabelValue: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="mx-auto text-center">
      <p className="mb-[8px] body1-medium text-gray5">{label}</p>
      <p className="heading4-semibold text-gray7">{value}</p>
    </div>
  );
};

export default VerticalLabelValue;
