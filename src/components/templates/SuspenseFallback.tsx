import React from 'react';
import { Lottie } from '../atoms';

const SuspenseFallback: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray2">
      <div className="flex justify-center items-center w-[100vw] max-w-[480px] min-h-[100vh] bg-white">
        <Lottie />
      </div>
    </div>
  );
};

export default SuspenseFallback;
