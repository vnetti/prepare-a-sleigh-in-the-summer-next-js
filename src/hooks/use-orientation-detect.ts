import { useEffect } from 'react';
import screenState from '@store/screen';

const useOrientationDetect = () => {
  useEffect(() => {
    const orientationChange = () => {
      window.scrollTo(0, 0);
      if (window.innerWidth > window.innerHeight) {
        screenState.setOrientation('landscape');
      } else screenState.setOrientation('portrait');
    };
    orientationChange();

    window.addEventListener('resize', orientationChange);

    return () => window.removeEventListener('resize', orientationChange);
  }, []);
};

export default useOrientationDetect;
