export const queryKeys = {
  INGREDIENT: (id?: number) => ['ingredient', id] as const,
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
