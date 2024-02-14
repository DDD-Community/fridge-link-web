export const queryKeys = {
  INGREDIENT: (id?: number) => (id ? ['ingredient', id] : ['ingredient']),
  KAKAO: () => ['kakao'],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
