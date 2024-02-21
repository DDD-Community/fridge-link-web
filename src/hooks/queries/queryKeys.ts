export const queryKeys = {
  INGREDIENT: (id?: number) => (id ? ['ingredient', id] : ['ingredient']),
  KAKAO: () => ['kakao'],
  SHARES: () => ['shares'],
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
