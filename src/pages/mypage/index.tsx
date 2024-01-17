import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';
import React from 'react';

const Mypage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'마이페이지'} />
      <p>mypage page</p>
    </div>
  );
};

export default Mypage;
