import { type NextPage } from 'next';
import MyFridgeImg from '@/assets/images/img_home_my.svg';
import LogoTextImg from '@/assets/logos/text_logo_m.svg';
import FriendsFridgeImg from '@/assets/images/img_home_friend.svg';
import { GreenArrowButton } from '@/components/atoms';
import { NearExpirationWarnBox, SvgAndTextBox } from '@/components/molecules';
import { IngredientBoard } from '@/components/organisms';
import Header from '@/components/organisms/Header';
import Link from 'next/link';
import { AlarmIcon } from '@/assets/icons';
import withLogin from '@/components/templates/withLogin';

const NEAR_EXPIRATION_COUNT_MOCK_DATA = 2;

const Home: NextPage = () => {
  const isNearExpirationWarn = true;
  return (
    <div className="pt-[52px]">
      <Header
        headerTitle={''}
        headerLeft={<LogoTextImg />}
        headerRight={
          <div>
            <AlarmIcon />
          </div>
        }
      />
      <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
        {isNearExpirationWarn && (
          <NearExpirationWarnBox
            className="mt-12"
            count={NEAR_EXPIRATION_COUNT_MOCK_DATA}
          />
        )}
        <div className="flex gap-8.5 mt-12">
          <SvgAndTextBox
            svgComponent={<MyFridgeImg />}
            text="내 냉장고"
            linkTo="/fridge"
          />
          <SvgAndTextBox
            svgComponent={<FriendsFridgeImg />}
            text="친구 냉장고"
            linkTo="/friends"
          />
        </div>
        <div>
          <div className="text-gray6 mt-30 mb-12 heading4-semibold">
            소비기한
          </div>
          <IngredientBoard />
        </div>
        <Link href="/fridge">
          <GreenArrowButton className="mt-14" text="내 냉장고 확인하기" />
        </Link>
      </section>
    </div>
  );
};
export default withLogin(Home);
