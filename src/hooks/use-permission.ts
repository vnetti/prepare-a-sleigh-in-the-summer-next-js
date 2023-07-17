import { useCallback } from 'react';
import screenState from '@store/screen';

interface DeviceOrientationEventIOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

const usePermission = () => {
  if (screenState.isGranted === 'unknown') {
    return useCallback(() => {
      screenState.onClosePermission()
      const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventIOS)
        .requestPermission;

      if (typeof DeviceMotionEvent !== 'undefined' && typeof requestPermission === 'function') {
        requestPermission()
          .then((response) => {
            if (response === 'denied') {
              screenState.setIsGranted(false);
              alert('Увы, ты отказал в доступе, так что анимашек для тебя не будет!');
            } else screenState.setIsGranted(true);
          })
          .catch(console.error);
      } else screenState.setIsGranted('unknown');
    }, []);
  } else if (!screenState.isGranted) {
    return () => {
      alert(
        'Увы ты уже отказал в доступе. Чтобы запросить доступ еще раз тебе нужно полностью закрыть браузер и попытаться снова',
      );
      screenState.onClosePermission()
    }
  }
  return screenState.onClosePermission()
};

export default usePermission;
