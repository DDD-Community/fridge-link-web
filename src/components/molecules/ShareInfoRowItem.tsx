import React, { type SVGProps } from 'react';

const ShareInfoRowItem: React.FC<{
  icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}> = ({ icon, label, value }) => {
  const IconComp = icon;

  return (
    <div className="flex justify-between items-center mt-[18px]">
      <span>
        <IconComp width={16} height={16} fill="#B5B9C5" className="inline" />
        <span className="ml-[4px] body1-medium text-gray5">{label}</span>
      </span>
      <span className="body1-medium text-gray7">{value}</span>
    </div>
  );
};

export default ShareInfoRowItem;
