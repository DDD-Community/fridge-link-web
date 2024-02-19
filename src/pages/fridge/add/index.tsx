import type { NextPage } from 'next';
import { Header } from '@/components/organisms';
import { Container } from '../../../components/atoms';
import { useState } from 'react';
import { useGetIngredientList } from '@/hooks/queries/fridge';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CATEGORIES = ['전체', '과일', '고기'];

const FridgePage: NextPage = () => {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState('전체');

  const data = useGetIngredientList();

  const handleClickIngredient = (id: number) => {
    void router.push(`/fridge?id=${id}`);
  };

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
        {data?.map((items) => (
          <Container key={items.category} className="bg-white">
            <label className="w-full body1-semibold">{items.category}</label>
            <ul className="w-full grid grid-cols-4 gap-4">
              {items.ingredientGroupList.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    handleClickIngredient(item.id);
                  }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={item.iconImage}
                    alt={item.name}
                    width={48}
                    height={48}
                  />
                  <div className="body2-regular">{item.name}</div>
                </li>
              ))}
            </ul>
          </Container>
        ))}
      </main>
    </div>
  );
};
export default FridgePage;
