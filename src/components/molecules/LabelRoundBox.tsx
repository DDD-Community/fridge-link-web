import React, { type ReactElement } from 'react';

const LabelRoundBox: React.FC<{
  content: ReactElement;
  label: string;
}> = ({ content, label }) => {
  return (
    <div className="mb-[20px] px-[20px] py-[16px] bg-white rounded-[12px]">
      <p className="mb-[12px] body1-semibold text-gray8">{label}</p>
      {content}
    </div>
  );
};

export default LabelRoundBox;
