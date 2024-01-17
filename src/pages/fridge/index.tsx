import Header from '@/components/organisms/Header';
import { FridgeBoard, FridgeInfoBox } from '@/components/organisms';
import { type NextPage } from 'next';

const FridgePage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'내 냉장고'} />
      <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
        <FridgeInfoBox />
        <FridgeBoard />
      </section>
    </div>
  );
};
export default FridgePage;
