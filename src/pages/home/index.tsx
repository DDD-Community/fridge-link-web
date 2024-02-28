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
import { useGetMyIngredientsCount } from '@/hooks/queries/mypage';

const Home: NextPage = () => {
  const ingredientCount = useGetMyIngredientsCount();

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
      <section className={`flex flex-col min-h-screen p-0 pl-20 pr-20 pb-20 bg-gray1`}>
        {!!ingredientCount && <NearExpirationWarnBox className="mb-12" count={ingredientCount} />}
        <div className="flex gap-8.5">
          <SvgAndTextBox svgComponent={<MyFridgeImg />} text="내 냉장고" linkTo="/fridge" />
          <SvgAndTextBox svgComponent={<FriendsFridgeImg />} text="친구 냉장고" linkTo="/friends" />
        </div>
        <div>
          <div className="text-gray6 mt-30 mb-12 heading4-semibold">소비기한</div>
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
