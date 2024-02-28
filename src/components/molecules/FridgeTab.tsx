import { BorderTab } from '../atoms';
import React from 'react';

interface FridgeTabProps {
  currentTabName: '냉장' | '냉동';
  handleTabNameChange: (tabName: '냉장' | '냉동') => void;
}
const FridgeTab: React.FC<FridgeTabProps> = ({ currentTabName, handleTabNameChange }) => {
  return (
    <div className="flex w-full justify-evenly">
      <BorderTab tabName="냉장" currentTabName={currentTabName} handleTabNameChange={handleTabNameChange} />
      <BorderTab
        tabName="냉동"
        currentTabName={currentTabName}
        handleTabNameChange={handleTabNameChange}
        className="-ml-10"
      />
    </div>
  );
};

export default FridgeTab;
