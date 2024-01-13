import AppleIconSvg from '../assets/icons/Frame 35.svg';
import { AppleIcon } from '@/components/atoms/icons/FoodIcons';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className={`flex min-h-screen justify-center items-center p-24 `}>
      <div className="heading1-bold text-primary2">mara</div>
      <p className="body2-semibold text-point1">web</p>
      <AppleIconSvg />
      <AppleIcon />
    </main>
  );
};
export default Home;
