import { type NextPage } from 'next';
import MyFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_my.svg';
import FriendsFridgeIconSvg from '@/assets/icons/IMG/Home/img_home_friend.svg';
import { GreenArrowButton } from '@/components/atoms';
import { NearExpirationWarnBox, SvgAndTextBox } from '@/components/molecules';
import { IngredientBoard } from '@/components/organisms';
import Header from '@/components/organisms/Header';
import AlarmIcon from '@/assets/icons/ICON/COMMON/ic_alert.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  const isNearExpirationWarn = true;
  return (
    <div className="pt-[52px]">
      <Header
        headerTitle={''}
        headerLeft={<div className="w-[100px] h-3 bg-point2" />}
        headerRight={
          <div>
            <AlarmIcon />
          </div>
        }
      />
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
          <div className="text-gray6 mt-30 mb-12 heading4-semibold">
            소비기한
          </div>
          <IngredientBoard />
        </div>
        <Link href="myfridge">
          <GreenArrowButton className="mt-14" text="내 냉장고 확인하기" />
        </Link>
      </section>
    </div>
  );
};
export default Home;
