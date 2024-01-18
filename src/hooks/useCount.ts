import { useState } from 'react';

export interface CountState {
  currentCount: number;
  handleIncreaseCount: () => void;
  handleDecreaseCount: () => void;
}

const useCount = (): CountState => {
  const [currentCount, setCurrentCount] = useState(1);

  const handleIncreaseCount: () => void = () => {
    setCurrentCount((prev) => prev + 1);
  };

  const handleDecreaseCount: () => void = () => {
    setCurrentCount((prev) => prev - 1);
  };

  return { currentCount, handleDecreaseCount, handleIncreaseCount };
};

export default useCount;
