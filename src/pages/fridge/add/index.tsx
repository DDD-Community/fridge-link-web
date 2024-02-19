import type { NextPage } from 'next';
import { Header } from '@/components/organisms';
import { Container } from '../../../components/atoms';
import { useState } from 'react';

const CATEGORIES = ['전체', '과일', '고기'];

const FridgePage: NextPage = () => {
  const [currentCategory, setCurrentCategory] = useState('전체');

  return (
    <div className={'pt-[52px] min-h-screen'}>
      <Header headerTitle={'식자재 추가'} />
      <main className={`flex flex-col min-h-screen p-20 bg-gray1 gap-[18px]`}>
        <section className="flex gap-[10px]">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              onClick={() => {
                setCurrentCategory(category);
              }}
              className={`${category === currentCategory ? 'bg-primary2 text-white' : 'bg-white text-gray4'} cursor-pointer body1-semibold pt-[6px] pb-[6px] pl-[18px] pr-[18px] rounded-[20px]`}
            >
              {category}
            </div>
          ))}
        </section>
        <Container className="bg-white">
          <label className="w-full body1-semibold">채소</label>
          <ul className="w-full grid grid-cols-4 gap-4">
            <li key="상추" className="flex flex-col items-center">
              <div>이미지</div>
              <div className="body2-regular">상추</div>
            </li>
            <li key="토마토" className="flex flex-col items-center">
              <div>이미지</div>
              <div className="body2-regular">토마토</div>
            </li>
            <li key="상추" className="flex flex-col items-center">
              <div>이미지</div>
              <div className="body2-regular">상추</div>
            </li>
            <li key="토마토" className="flex flex-col items-center">
              <div>이미지</div>
              <div className="body2-regular">토마토</div>
            </li>
          </ul>
        </Container>
      </main>
    </div>
  );
};
export default FridgePage;
