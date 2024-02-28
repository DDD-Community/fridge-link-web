import type { DebouncedFunc } from 'lodash';
import debounce from 'lodash/debounce';

export const debounceFunction = <T extends (...args: any[]) => void>(func: T, delay: number): DebouncedFunc<T> => {
  return debounce(func, delay);
};
