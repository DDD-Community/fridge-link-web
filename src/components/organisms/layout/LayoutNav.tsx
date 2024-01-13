import React from 'react';
import LayoutButton from '@/components/molecules/LayoutButton';

const LayoutNav: React.FC = () => {
  return (
    <div>
      <LayoutButton
        isActive={true}
        svgComponent={<div></div>}
        text="홈"
        linkTo=""
      />
      <LayoutButton
        isActive={false}
        svgComponent={<div></div>}
        text="내냉장고"
        linkTo=""
      />
      <LayoutButton
        isActive={false}
        svgComponent={<div></div>}
        text="나눔"
        linkTo=""
      />
      <LayoutButton
        isActive={false}
        svgComponent={<div></div>}
        text="My"
        linkTo=""
      />
    </div>
  );
};

export default LayoutNav;
