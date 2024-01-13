import React from 'react';
import MyFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_my.svg';
import FriendsFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_friend.svg';
import FridgeEnterButton from '@/components/molecules/FridgeEnterButton';

const FridgeEnterButtons: React.FC = () => {
  return (
    <div className="flex">
      <FridgeEnterButton
        svgComponent={<MyFridgeIconSvg />}
        text="내 냉장고"
        linkTo="/myfridge"
      />
      <FridgeEnterButton
        svgComponent={<FriendsFridgeIconSvg />}
        text="친구 냉장고"
        linkTo="/friendfridge"
      />
    </div>
  );
};

export default FridgeEnterButtons;
