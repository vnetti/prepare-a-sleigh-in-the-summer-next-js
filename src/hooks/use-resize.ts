import { useEffect, useState } from 'react';

const useResize = (breakpoint: number) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return width < breakpoint;
};

export default useResize;
