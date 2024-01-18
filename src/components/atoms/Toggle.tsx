import React from 'react';
import { ToggleOffSVG, ToggleOnSVG } from './Icon';

const Toggle: React.FC<{
  isToggleOn: boolean;
  toggleState: (e: React.MouseEvent) => void;
}> = ({ isToggleOn, toggleState }) => {
  return isToggleOn ? (
    <div className="mr-[-10px]" onClick={toggleState}>
      <ToggleOnSVG />
    </div>
  ) : (
    <div onClick={toggleState}>
      <ToggleOffSVG />
    </div>
  );
};

export default Toggle;
