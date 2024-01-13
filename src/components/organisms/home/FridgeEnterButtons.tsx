import React from 'react';
import MyRefrigeIconSvg from '@/assets/icons/IMG/Home/img_home_my.svg';
import FridgeEnterButton from '@/components/molecules/FridgeEnterButton';

const FridgeEnterButtons: React.FC = () => {
  return (
    <div className="flex">
      <FridgeEnterButton
        svgComponent={<MyRefrigeIconSvg />}
        text="내 냉장고"
        linkTo="/myrefrige"
      />
      <FridgeEnterButton
        svgComponent={<MyRefrigeIconSvg />}
        text="친구 냉장고"
        linkTo="/friendrefrige"
      />
    </div>
  );
};

export default FridgeEnterButtons;
