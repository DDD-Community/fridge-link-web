import React, { useEffect } from 'react';
import type { CountState } from '@/hooks/useCount';

const Counter: React.FC<CountState> = ({
  currentCount,
  handleDecreaseCount,
  handleIncreaseCount,
}) => {
  useEffect(() => {}, [currentCount]);
  return (
    <div className="flex items-center h-[32px] bg-white rounded-[6px]">
      <button className="w-[30px] text-center" onClick={handleDecreaseCount}>
        -
      </button>
      <input className="w-[30px] text-center" value={currentCount} readOnly />
      <button className="w-[30px] text-center" onClick={handleIncreaseCount}>
        +
      </button>
    </div>
  );
};

export default Counter;
