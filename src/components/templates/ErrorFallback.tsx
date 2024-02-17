import React from 'react';
import { Button } from '../atoms';

const ErrorFallback: React.FC = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary?: () => void;
}) => {
  const handleRefresh = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    }
  };
  return (
    <div className="flex justify-center items-center bg-gray2">
      <div className="flex flex-col w-[100vw] max-w-[480px] min-h-[100vh] bg-white">
        <section
          className={`flex flex-col justify-center gap-[50px] p-[20px] flex-1`}
        >
          <div className="text-center">에러 발생!</div>
          <Button
            className="bg-primary2 text-white"
            text={'다시 요청하기'}
            onClick={handleRefresh}
          />
        </section>
      </div>
    </div>
  );
};

export default ErrorFallback;
