import { type NextPage } from 'next';
import MyFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_my.svg';
import FriendsFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_friend.svg';
import { GreenLink } from '@/components/atoms';
import { NearExpirationWarnBox, SvgAndTextBox } from '@/components/molecules';
import { IngredientBoard } from '@/components/organisms';

const Home: NextPage = () => {
  const isNearExpirationWarn = true;
  return (
    <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
      {isNearExpirationWarn && (
        <NearExpirationWarnBox className="mt-12" count={4} />
      )}
      <div className="flex gap-8.5 mt-12">
        <SvgAndTextBox
          svgComponent={<MyFridgeIconSvg width={72} height={72} />}
          text="내 냉장고"
          linkTo="/myfridge"
        />
        <SvgAndTextBox
          svgComponent={<FriendsFridgeIconSvg width={97} height={72} />}
          text="친구 냉장고"
          linkTo="/friendfridge"
        />
      </div>
      <div>
        <div className="text-gray6 mt-30 mb-12 heading4-semibold">소비기한</div>
        <IngredientBoard />
      </div>
      <GreenLink
        className="mt-14"
        text="내 냉장고 확인하기"
        linkTo="myfridge"
      />
    </section>
  );
};
export default Home;
