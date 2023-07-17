import { useEffect, useState } from 'react';
import screenState from '@store/screen';

const useOrientationDetect = () => {
  const [state, setState] = useState('portrait');

  useEffect(() => {
    screenState.setOrientation(state as 'landscape' | 'portrait');
  }, [state]);

  useEffect(() => {
    const orientationChange = () => {
      if (window.innerWidth > window.innerHeight) {
        setState('landscape');
      } else {
        setState('portrait');
      }
      window.scrollTo(0, 0);
    };
    orientationChange();

    window.addEventListener('resize', orientationChange);

    return () => window.removeEventListener('resize', orientationChange);
  }, []);
};

export default useOrientationDetect;
