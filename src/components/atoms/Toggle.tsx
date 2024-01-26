import React from 'react';
import ToggleOffImg from '@/assets/images/img_toggleoff.svg';
import ToggleOnImg from '@/assets/images/img_toggleon.svg';

const Toggle: React.FC<{
  isToggleOn?: boolean;
  toggleState?: (e: React.MouseEvent) => void;
}> = ({ isToggleOn, toggleState }) => {
  return isToggleOn ? (
    <div className="mr-[-10px]" onClick={toggleState}>
      <ToggleOnImg />
    </div>
  ) : (
    <div onClick={toggleState}>
      <ToggleOffImg />
    </div>
  );
};

export default Toggle;
