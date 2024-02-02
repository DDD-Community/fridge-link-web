import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const FriendsListPage: NextPage = () => {
  return (
    <div className={'bg-white pt-[52px] min-h-screen'}>
      <Header headerTitle={'계정'} />
      <section
        className={`flex flex-col items-center gap-[40px] min-h-screen p-20 bg-gray1 pt-[40px]`}
      >
        <div className="w-full">로그아웃</div>
        <div className="w-full">탈퇴하기</div>
      </section>
    </div>
  );
};
export default FriendsListPage;
