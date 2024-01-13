import React from 'react';
import MyFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_my.svg';
import FriendsFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_friend.svg';
import FridgeEnterButton from '@/components/molecules/home/FridgeEnterButton';

const FridgeEnterButtons: React.FC = () => {
  return (
    <div className="flex gap-8.5">
      <FridgeEnterButton
        svgComponent={<MyFridgeIconSvg width={72} height={72} />}
        text="내 냉장고"
        linkTo="/myfridge"
      />
      <FridgeEnterButton
        svgComponent={<FriendsFridgeIconSvg width={97} height={72} />}
        text="친구 냉장고"
        linkTo="/friendfridge"
      />
    </div>
  );
};

export default FridgeEnterButtons;
