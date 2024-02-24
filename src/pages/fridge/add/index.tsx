import type { NextPage } from 'next';
import { Header, IngredientModal } from '@/components/organisms';
import { Container } from '../../../components/atoms';
import { useRef, useState } from 'react';
import { useGetIngredientList } from '@/hooks/queries/fridge';
import Image from 'next/image';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import Draggable from 'react-draggable';
import type { DraggableEvent } from 'react-draggable';

const FridgePage: NextPage = () => {
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

  const handleDrag = (
    e: DraggableEvent,
    { deltaX }: { deltaX: number },
  ): void => {
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
                id={ingredientId ?? 0}
                toggleIsOpenIngredientModal={onCloseIngredientModal}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'식자재 추가'} />
        <main
          className={`flex flex-col min-h-screen p-20 bg-gray1 gap-[18px] relative`}
        >
          <section className="overflow-hidden relative">
            <Draggable axis="x" onDrag={handleDrag}>
              <div
                className="flex gap-[10px]"
                style={{ transform: `translateX(${scrollX}px)` }}
                ref={categoryRef}
              >
                {['전체', ...(data?.map((item) => item.category) ?? [])].map(
                  (category) => (
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
                  ),
                )}
              </div>
            </Draggable>
          </section>
          {data?.map((items) => (
            <Container
              key={items.category}
              className="bg-white"
              id={items.category}
            >
              <label className="w-full body1-semibold">{items.category}</label>
              <ul className="w-full grid grid-cols-4 gap-4">
                {items.ingredientGroupList.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setIngredientId(item.id);
                      onOpenIngredientModal();
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
    </>
  );
};
export default FridgePage;
