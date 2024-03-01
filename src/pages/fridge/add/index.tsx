import { Header, IngredientModal } from '@/components/organisms';
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { Container } from '../../../components/atoms';
import Draggable from 'react-draggable';
import type { DraggableEvent } from 'react-draggable';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useGetIngredientList } from '@/hooks/queries/fridge';

// 임시 식자재 추가 disapper
const CATEGORY_COUNT: Record<string, number> = {
  야채: 11,
  과일: 6,
  고기: 4,
  수산물: 4,
  유제품: 4,
  면: 2,
  인스턴트: 5,
  반찬: 1,
  '빵/디저트/과자': 1,
  '음료/주류': 3,
  '조미료/양념/소스': 4,
  양곡: 2,
  견과: 3,
};
const FridgePage: NextPage = () => {
  const [category, setCategory] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [ingredientId, setIngredientId] = useState<null | number>(null);
  const {
    isOpen: isOpenIngredientModal,
    onOpen: onOpenIngredientModal,
    onClose: onCloseIngredientModal,
  } = useDisclosure();

  const [currentCategory, setCurrentCategory] = useState('전체');
  const categoryRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
    const categoryComponent = document.getElementById(category);

    if (categoryComponent) {
      const labelPosition = categoryComponent.getBoundingClientRect().top;

      window.scrollTo({
        top: window.scrollY + labelPosition - 300,
        behavior: 'smooth',
      });
    }
  };

  const data = useGetIngredientList();

  const [scrollX, setScrollX] = useState(0);

  const containerWidth = 1400;
  const maxScrollX = containerWidth - window.innerWidth;

  const handleDrag = (e: DraggableEvent, { deltaX }: { deltaX: number }): void => {
    const newScrollX = scrollX - deltaX;
    if (newScrollX > maxScrollX) {
      setScrollX(maxScrollX);
    } else if (newScrollX < maxScrollX) {
      setScrollX(0);
    } else {
      setScrollX(newScrollX);
    }
  };

  return (
    <>
      {isOpenIngredientModal && (
        <Modal
          onClose={onCloseIngredientModal}
          isOpen={isOpenIngredientModal}
          motionPreset="slideInBottom"
          trapFocus={false}
        >
          <ModalOverlay height="100vh" onClick={onCloseIngredientModal} />
          <ModalContent
            className="bg-white"
            position="fixed"
            bottom="0"
            borderRadius="24px 24px 0px 0px"
            maxW="lg"
            margin={0}
          >
            <ModalBody padding={0}>
              <IngredientModal
                category={category}
                categoryImage={categoryImage}
                id={ingredientId ?? 0}
                toggleIsOpenIngredientModal={onCloseIngredientModal}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'식자재 추가'} />
        <main className={`flex flex-col min-h-screen p-20 bg-gray1 gap-[18px] relative`}>
          <section className="overflow-hidden relative">
            <Draggable axis="x" onDrag={handleDrag}>
              <div className="flex gap-[10px]" style={{ transform: `translateX(${scrollX}px)` }} ref={categoryRef}>
                {['전체', ...(data?.map((item) => item.category) ?? [])].map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      handleCategoryClick(category);
                    }}
                    className={`${category === currentCategory ? 'bg-primary2 text-white' : 'bg-white text-gray4'} cursor-pointer body1-semibold pt-[6px] pb-[6px] pl-[18px] pr-[18px] rounded-[20px]`}
                    style={{ whiteSpace: 'nowrap' }}
                    data-category={category}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </Draggable>
          </section>
          {data?.map((items) => (
            <Container key={items.category} className="bg-white" id={items.category}>
              <label className="w-full body1-semibold">{items.category}</label>
              <ul className="w-full grid grid-cols-4 gap-4">
                {items.ingredientGroupList.slice(0, CATEGORY_COUNT[items.category]).map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setIngredientId(item.id);
                      onOpenIngredientModal();
                    }}
                    className="flex flex-col items-center"
                  >
                    <Image src={item.iconImage} alt={item.name} width={48} height={48} />
                    <div className="body2-regular">{item.name}</div>
                  </li>
                ))}
                <li
                  key={items.category}
                  onClick={() => {
                    setIngredientId(0);
                    setCategory(items.category);
                    setCategoryImage(items.ingredientGroupList[0].iconImage);
                    onOpenIngredientModal();
                  }}
                  className="flex flex-col items-center"
                >
                  <Image src={items.ingredientGroupList[0].iconImage} alt={items.category} width={48} height={48} />
                  <div className="body2-regular">직접 추가</div>
                </li>
              </ul>
            </Container>
          ))}
        </main>
      </div>
    </>
  );
};
export default FridgePage;
