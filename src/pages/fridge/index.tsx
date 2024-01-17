import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const FridgePage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'내 냉장고'} />
      <p>fridge page</p>
    </div>
  );
};
export default FridgePage;
