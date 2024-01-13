import { type NextPage } from 'next';
import FridgeEnterButtons from '@/components/organisms/home/FridgeEnterButtons';
import HomeHeader from '@/components/molecules/home/HomeHeader';
import AlertBox from '@/components/molecules/home/AlertBox';
import TermBoard from '@/components/organisms/home/TermBoard';
import GreenButton from '@/components/atoms/GreenButton';

const Home: NextPage = () => {
  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center p-24 `}
    >
      <HomeHeader />
      <AlertBox count={4} />
      <FridgeEnterButtons />
      <TermBoard />
      <GreenButton text="내 냉장고 확인하기" linkTo="myfridge" />
    </main>
  );
};
export default Home;
