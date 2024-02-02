import React from 'react';
import { GreenArrowButton, Container } from '../atoms';
import { AppleIcon } from '@/components/atoms/IngredientIcons';
import Link from 'next/link';

const FriendsRecentBoard: React.FC = () => {
  const INGREDIENT_LIST = [
    { isToday: true },
    { isToday: false },
    { isToday: false },
  ];
  return (
    <Container className="flex bg-white">
      <div className="text-primary2 body2-semibold">최신근황</div>
      <div className="text-center text-gray8">
        김지수님이
        <br />
        토마토를 추가했어요!
      </div>
      <div className="text-gray6 body2-medium">
        그밖에 신선한 재료를 구경할 수 있어요.
      </div>
      <div className="flex w-full justify-center gap-[6px]">
        {INGREDIENT_LIST.map((ingredient) => (
          <div
            className={`flex flex-col items-center gap-[9.5px] ${ingredient.isToday ? 'bg-[#FFD5C6]' : 'bg-gray1'} p-[12px] rounded-[12px]`}
          >
            <AppleIcon width={38} height={38} />
            <div
              className={`body2-semibold ${ingredient.isToday ? 'text-point3' : ''}`}
            >
              오늘 추가
            </div>
          </div>
        ))}
      </div>
      <Link className="w-full" href="/friend/12">
        <GreenArrowButton className="bg-primary2" text="친구 냉장고 보러가기" />
      </Link>
    </Container>
  );
};

export default FriendsRecentBoard;
