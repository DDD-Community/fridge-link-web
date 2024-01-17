import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const SharePage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'나눔'} />
      <p>sharepage</p>
    </div>
  );
};
export default SharePage;
