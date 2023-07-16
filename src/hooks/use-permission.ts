import { useCallback, useState } from 'react';

interface DeviceOrientationEventIOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

const usePermission = () => {
  const [isGranted, setIsGranted] = useState(false);

  const permission = useCallback(() => {
    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventIOS)
      .requestPermission;

    if (typeof DeviceMotionEvent !== 'undefined' && typeof requestPermission === 'function') {
      requestPermission()
        .then((response) => {
          if (response === 'denied')
            alert('Увы, ты отказал в доступе, так что анимашек для тебя не будет!');
          else setIsGranted(true);
        })
        .catch(console.error);
    }
  }, []);

  return { isGranted, permission };
};

export default usePermission;
