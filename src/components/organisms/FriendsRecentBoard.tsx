import { Container, GreenArrowButton } from '../atoms';

import type { FriendObjectType } from '@/hooks/queries/friends/useGetFriendsNews';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsRecentBoard: React.FC<{ friendNews: FriendObjectType }> = ({ friendNews }) => {
  return (
    <Container className="flex bg-white gap-[12px]">
      <div className="text-primary2 body2-semibold">최신근황</div>
      <div className="text-center text-gray8 heading3-semibold">
        {friendNews.nickname} 님이
        <br />
        {friendNews.friendRefrigeratorIngredientGroupList[0].name}를 추가했어요!
      </div>
      <div className="text-gray6 body2-medium">그밖에 신선한 재료를 구경할 수 있어요.</div>
      <div className="flex w-full justify-center gap-[6px]">
        {friendNews.friendRefrigeratorIngredientGroupList.map(({ name, iconImage }) => (
          <div key={name} className={`flex flex-col items-center bg-gray1 p-[12px] rounded-[12px]`}>
            <Image src={iconImage} alt={`${name} 아이콘 이미지`} width={50} height={50} />
            <div className={`body2-medium text-gray7`}>{name}</div>
          </div>
        ))}
      </div>
      <Link className="w-full" href={`/friend/${friendNews.userId}?name=${friendNews.nickname}`}>
        <GreenArrowButton className="bg-primary2" text="친구 냉장고 보러가기" />
      </Link>
    </Container>
  );
};

export default FriendsRecentBoard;
