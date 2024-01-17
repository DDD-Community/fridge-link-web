import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'홈'} />
    </div>
  );
};
export default HomePage;
