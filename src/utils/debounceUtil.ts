import debounce from 'lodash/debounce';
import type { DebouncedFunc } from 'lodash';

export const debounceFunction = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): DebouncedFunc<T> => {
  return debounce(func, delay);
};
