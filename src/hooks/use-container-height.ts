import { useEffect, useRef, useState } from 'react';

const useContainerHeight = () => {
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (container) {
      const callback = () => setHeight(container.offsetHeight);
      if (height === 0) callback();
      container.style.setProperty('--container-height', `${height}px`);
      window.addEventListener('resize', callback);
      console.log(height);
      return () => window.removeEventListener('resize', callback);
    }
  }, [ref, height]);

  return ref;
};

export default useContainerHeight;
