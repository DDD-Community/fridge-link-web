import MonstersImg from '@/assets/images/img_login_monsters.svg';
import KaKaoImg from '@/assets/images/img_login_kakao.svg';
import GoogleImg from '@/assets/images/img_login_google.svg';
import { type NextPage } from 'next';
import { useGetKakaoLogin } from '@/hooks/queries/login';

const LoginPage: NextPage = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email&access_type=offline`;

  const handleKaKaoClick: () => void = () => {
    window.location.href = `${kakaoURL}&type=kakao`;
  };

  const handleGoogleClick: () => void = () => {
    window.location.href = `${googleURL}&type=google`;
  };

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window?.location.search);
    const code = urlParams.get('code');
    // const type = urlParams.get('type');
    // 구글 추가시 타입 redirect_uri 변경

    if (code) {
      useGetKakaoLogin(code);
    }
  }
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
          <KaKaoImg onClick={handleKaKaoClick} />
          <GoogleImg onClick={handleGoogleClick} />
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
