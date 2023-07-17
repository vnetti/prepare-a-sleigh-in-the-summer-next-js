import { useEffect } from 'react';
import screenState from '@store/screen';

const useOrientationDetect = () => {
  useEffect(() => {
    const orientationChange = () => {
      if (window.innerWidth > window.innerHeight) {
        screenState.setOrientation('landscape');
      } else screenState.setOrientation('portrait');
      window.scrollTo(0, 0)
    };
    orientationChange();

    window.addEventListener('resize', orientationChange);

    return () => window.removeEventListener('resize', orientationChange);
  }, []);
};

export default useOrientationDetect;
