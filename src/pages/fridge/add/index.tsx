import type { NextPage } from 'next';
import { Header, IngredientAddModal } from '@/components/organisms';
import { Container } from '../../../components/atoms';
import { useState } from 'react';
import { useGetIngredientList } from '@/hooks/queries/fridge';
import Image from 'next/image';
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';

const FridgePage: NextPage = () => {
  const [ingredientId, setIngredientId] = useState<null | number>(null);
  const {
    isOpen: isOpenIngredientAddModal,
    onOpen: onOpenIngredientAddModal,
    onClose: onCloseIngredientAddModal,
  } = useDisclosure();

  const [currentCategory, setCurrentCategory] = useState('전체');

  const data = useGetIngredientList();

  return (
    <>
      {isOpenIngredientAddModal && (
        <Modal
          onClose={onCloseIngredientAddModal}
          isOpen={isOpenIngredientAddModal}
          motionPreset="slideInBottom"
          trapFocus={false}
        >
          <ModalOverlay height="100vh" onClick={onCloseIngredientAddModal} />
          <ModalContent
            className="bg-white"
            position="fixed"
            bottom="0"
            borderRadius="24px 24px 0px 0px"
            maxW="lg"
            margin={0}
          >
            <ModalBody padding={0}>
              <IngredientAddModal
                id={ingredientId ?? 0}
                toggleIsOpenIngredientAddModal={onCloseIngredientAddModal}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <div className={'pt-[52px] min-h-screen'}>
        <Header headerTitle={'식자재 추가'} />
        <main className={`flex flex-col min-h-screen p-20 bg-gray1 gap-[18px]`}>
          <section className="flex gap-[10px] flex-wrap">
            {['전체', ...(data?.map((item) => item.category) as string[])].map(
              (category) => (
                <div
                  key={category}
                  onClick={() => {
                    setCurrentCategory(category);
                  }}
                  className={`${category === currentCategory ? 'bg-primary2 text-white' : 'bg-white text-gray4'} cursor-pointer body1-semibold pt-[6px] pb-[6px] pl-[18px] pr-[18px] rounded-[20px]`}
                >
                  {category}
                </div>
              ),
            )}
          </section>
          {data?.map((items) => (
            <Container key={items.category} className="bg-white">
              <label className="w-full body1-semibold">{items.category}</label>
              <ul className="w-full grid grid-cols-4 gap-4">
                {items.ingredientGroupList.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setIngredientId(item.id);
                      onOpenIngredientAddModal();
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
