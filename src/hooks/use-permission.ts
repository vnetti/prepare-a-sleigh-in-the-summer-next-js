import { useCallback } from 'react';

interface DeviceOrientationEventIOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

const usePermission = () =>
  useCallback(() => {
    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventIOS)
      .requestPermission;

    if (typeof DeviceMotionEvent !== 'undefined' && typeof requestPermission === 'function') {
      requestPermission()
        .then((response) => {
          if (response === 'denied')
            alert('Увы, ты отказал в доступе, так что анимашек для тебя не будет!');
        })
        .catch(console.error);
    }
  }, []);

export default usePermission;
