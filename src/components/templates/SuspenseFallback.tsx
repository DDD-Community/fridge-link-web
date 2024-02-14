import Image from 'next/image';
import React from 'react';
import LottieGif from '@/assets/lottie.gif';

const SuspenseFallback: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray2">
      <div className="flex justify-center items-center w-[100vw] max-w-[480px] min-h-[100vh] bg-white">
        <Image src={LottieGif} alt="로딩중" />
      </div>
    </div>
  );
};

export default SuspenseFallback;
