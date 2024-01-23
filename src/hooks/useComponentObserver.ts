import { MutableRefObject, useEffect, useState } from 'react';

function useComponentObserver(
  ref: MutableRefObject<HTMLElement | null>,
  options?: IntersectionObserverInit | undefined) {
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsIntersect(true)
        else setIsIntersect(false);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const dom = ref.current;
    if (dom) observer.observe(dom)
    else throw new Error('ref is not valid');

    return () => {
      if (dom) observer.unobserve(dom);
    };
  }, []);

  return isIntersect;
};

export default useComponentObserver;