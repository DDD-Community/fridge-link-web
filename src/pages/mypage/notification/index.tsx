import { Toggle } from '@/components/atoms';
import Header from '@/components/organisms/Header';
import { type NextPage } from 'next';

const NotificationPage: NextPage = () => {
  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'알림'} />
      <section
        className={`flex flex-col gap-[20px] min-h-screen p-20 bg-gray1`}
      >
        <div className="flex flex-col justify-center items-center gap-22 p-32  w-full bg-white rounded-12 p-[18px]">
          <div className="w-full flex justify-between items-center">
            <div className="heading4-semibold">알림 허용</div>
            <Toggle />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-22 p-32  w-full bg-white rounded-12 p-[18px]">
          <label className="w-full text-gray6">알림</label>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-[10px]">
              <div className="heading4-semibold text-gray7">소비기한 알림</div>
              <div className="body2-medium text-gray5">소비기한 마감 알림</div>
            </div>
            <Toggle />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-[10px]">
              <div className="heading4-semibold text-gray7">나눔 알림</div>
              <div className="body2-medium text-gray5">나눔 현황 알림</div>
            </div>
            <Toggle />
          </div>
        </div>
      </section>
    </div>
  );
};
export default NotificationPage;
