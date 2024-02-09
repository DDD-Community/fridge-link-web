export const queryKeys = {
  KAKAO: () => ['login', 'kakao'],
  INGREDIENT: (id?: number) => ['ingredient', id] as const,
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
