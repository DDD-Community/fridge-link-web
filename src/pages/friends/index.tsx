import { FriendsFridgeList, FriendsRecentBoard } from '@/components/organisms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const FriendsPage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'친구 냉장고'} />
      <section className={`flex flex-col min-h-screen p-20 bg-gray1`}>
        <FriendsRecentBoard />
        <FriendsFridgeList />
      </section>
    </div>
  );
};
export default FriendsPage;
