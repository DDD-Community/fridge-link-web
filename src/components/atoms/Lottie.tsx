import React from 'react';
import Lottie from 'lottie-react';
import animationData from './../../assets/lottie.json';

const LottieComponent = () => {
  return (
    <Lottie animationData={animationData} style={{ width: 167, height: 156 }} />
  );
};

export default LottieComponent;
