import React from 'react';
import animationData from './../../assets/lottie.webp';
import Image from 'next/image';

const LottieComponent = () => {
  return <Image className="m-auto" src={animationData} alt="로딩중" width={167} height={156} />;
};

export default LottieComponent;
