import { useCallback, useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

const useParallax = (cb: (instance: Parallax) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const permission = useCallback(() => {
    if (
      typeof DeviceMotionEvent !== 'undefined' &&
      // @ts-ignore
      typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
      // @ts-ignore
      DeviceMotionEvent.requestPermission()
        // @ts-ignore
        .then((response) => {
          if (response !== 'granted') {
            alert('Увы, ты отказал в доступе, так что анимашек для тебя не будет!');
          }
        })
        .catch(console.error);
    } else {
      alert('DeviceMotionEvent is not defined');
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const parallaxInstance = new Parallax(ref.current);
      parallaxInstance.invert(false, false);
      cb(parallaxInstance);
    }
  }, []);

  return {ref, permission};
};

export default useParallax;
