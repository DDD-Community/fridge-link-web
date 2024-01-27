import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const FriendsListPage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'친구'} />
      <section
        className={`flex flex-col gap-[20px] min-h-screen p-20 bg-gray1`}
      >
        친구관리 및 추가 페이지
      </section>
    </div>
  );
};
export default FriendsListPage;
