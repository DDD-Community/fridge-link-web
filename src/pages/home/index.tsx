import { type NextPage } from 'next';
import FridgeEnterButtons from '@/components/organisms/home/FridgeEnterButtons';

const Home: NextPage = () => {
  return (
    <main className={`flex min-h-screen justify-center items-center p-24 `}>
      <FridgeEnterButtons />
    </main>
  );
};
export default Home;
