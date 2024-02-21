import type { RefObject } from 'react';
import { useEffect } from 'react';

export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = '1px',
  threshold = 0,
}: {
  target: RefObject<HTMLDivElement>;
  onIntersect: IntersectionObserverCallback;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}) => {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (target?.current !== null) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }

    return () => {
      if (typeof observer !== 'undefined') {
        observer.disconnect();
      }
    };
  }, [target, rootMargin, threshold, onIntersect, root]);
};
