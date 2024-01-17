import React from 'react';
import { BorderTab } from '../atoms';

const FridgeTab: React.FC = () => {
  return (
    <div className="flex w-full justify-evenly">
      <BorderTab tabName="냉장" isActive={true} />
      <BorderTab tabName="냉동" isActive={false} className="-ml-10" />
    </div>
  );
};

export default FridgeTab;
