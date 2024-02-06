import MonstersImg from '@/assets/images/img_login_monsters.svg';
import KaKaoImg from '@/assets/images/img_login_kakao.svg';
import GoogleImg from '@/assets/images/img_login_google.svg';
import { type NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <section
      className={`flex flex-col items-center justify-evenly min-h-screen p-20 bg-white`}
    >
      <div className="flex flex-col items-center">
        <MonstersImg />
        <div className="heading4-semibold text-gray8 mt-[18px] mb-[6px]">
          냉장고 관리, 얼른 시작해봐요
        </div>
        <div>로고</div>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <div className="flex items-center">
          <div className="flex-1 w-[96px] h-[1px] bg-gray6"></div>
          <div className="mx-4 text-gray6">SNS 계정으로 로그인</div>
          <div className="flex-1 w-[96px] h-[1px] bg-gray6"></div>
        </div>
        <div className="flex gap-[20px]">
          <KaKaoImg />
          <GoogleImg />
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
