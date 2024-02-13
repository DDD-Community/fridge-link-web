import Image from 'next/image';
import React from 'react';
import LottieGif from '@/assets/lottie.gif';

const SuspenseFallback: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray2">
      <div className="flex-col w-[100vw] max-w-[480px] min-h-[100vh] bg-gray1">
        <Image src={LottieGif} alt="로딩중" />
      </div>
    </div>
  );
};

export default SuspenseFallback;
