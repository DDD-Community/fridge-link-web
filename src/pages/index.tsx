import AppleIconSvg from '../assets/icons/Frame 35.svg';
import { AppleIcon } from '@/components/atoms/icons/FoodIcons';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        mara web
        <AppleIconSvg />
        <AppleIcon />
      </div>
    </main>
  );
}
