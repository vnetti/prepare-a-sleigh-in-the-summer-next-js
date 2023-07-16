import { useEffect } from 'react';
import screenState from '@store/screen'
// import '@assets/vendor/orientationChange'

const useOrientationDetect = () => {

  useEffect(() => {
    const orientationChange = () => {
      console.log(screen.orientation.type)
      screenState.setOrientation(screen.orientation.type);
    };

    screenState.setOrientation(screen.orientation.type);
    window.addEventListener('orientationchange', orientationChange);

    return () => window.removeEventListener('orientationchange', orientationChange);
  }, []);
};

export default useOrientationDetect;
