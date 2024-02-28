import Header from '@/components/organisms/Header';
import { useGetMe } from '@/hooks/queries/mypage';
import useLogout from '@/hooks/useLogout';
import { type NextPage } from 'next';

const FriendsListPage: NextPage = () => {
  const logout = useLogout();
  const data = useGetMe();

  return (
    <div className={'bg-white pt-[52px] min-h-screen'}>
      <Header headerTitle={'계정'} />
      <section className={`flex flex-col items-center gap-[40px] min-h-screen p-20 bg-gray1 pt-[40px]`}>
        <div className="w-full flex justify-between border-b-[1px] border-gray4 pb-[30px]">
          <div>연결된계정</div>
          <div className="text-gray4 heading4-semibold">{data.kakaoEmail ?? data.googleEmail ?? ''}</div>
        </div>
        <button className="w-full text-left" onClick={logout}>
          로그아웃
        </button>
        <div className="w-full">탈퇴하기</div>
      </section>
    </div>
  );
};
export default FriendsListPage;
