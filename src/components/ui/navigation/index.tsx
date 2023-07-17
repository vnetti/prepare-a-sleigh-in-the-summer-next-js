import styles from './styles.module.scss';
import { FC, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import screenState from '@store/screen';
import { observer } from 'mobx-react-lite';
import Portal from '@components/containers/portal';

const ButtonsBlock = () => {
  const handlerButton = useCallback(
    (handler: () => void) => {
      if (screenState.currentScreen === 0) return screenState.onCloseDisclaimer;
      return handler;
    },
    [screenState.currentScreen],
  );

  return (
    <div
      className={cn(
        styles.navigation,
        screenState.currentScreen === 0 && styles.navigation_disclaimer,
      )}
    >
      {screenState.currentScreen > 1 || screenState.currentScreen === 0 ? (
        <button
          className={cn(styles.button, styles.button_prev)}
          onClick={handlerButton(screenState.onPrevScreen)}
        >
          <span>назад</span>
          <svg
            className={cn(styles.arrow, styles.arrow_prev)}
            width="7"
            height="84"
            viewBox="0 0 7 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33516 82.9525C3.50683 83.1242 3.78516 83.1242 3.95682 82.9525L6.75432 80.155C6.92598 79.9833 6.92598 79.705 6.75432 79.5333C6.58265 79.3617 6.30432 79.3617 6.13265 79.5333L3.64599 82.02L1.15933 79.5333C0.987666 79.3617 0.709337 79.3617 0.537669 79.5333C0.366001 79.705 0.366001 79.9833 0.537669 80.155L3.33516 82.9525ZM3.20641 -1.92148e-08L3.20641 82.6417L4.08558 82.6417L4.08558 1.92148e-08L3.20641 -1.92148e-08Z"
              fill="white"
            />
          </svg>
        </button>
      ) : (
        ''
      )}
      {screenState.currentScreen < 5 ? (
        <button
          disabled={screenState.currentScreen > 4}
          className={cn(styles.button, styles.button_next)}
          onClick={handlerButton(screenState.onNextScreen)}
        >
          <span>далее</span>
          <svg
            className={styles.arrow}
            width="7"
            height="84"
            viewBox="0 0 7 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33516 82.9525C3.50683 83.1242 3.78516 83.1242 3.95682 82.9525L6.75432 80.155C6.92598 79.9833 6.92598 79.705 6.75432 79.5333C6.58265 79.3617 6.30432 79.3617 6.13265 79.5333L3.64599 82.02L1.15933 79.5333C0.987666 79.3617 0.709337 79.3617 0.537669 79.5333C0.366001 79.705 0.366001 79.9833 0.537669 80.155L3.33516 82.9525ZM3.20641 -1.92148e-08L3.20641 82.6417L4.08558 82.6417L4.08558 1.92148e-08L3.20641 -1.92148e-08Z"
              fill="white"
            />
          </svg>
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

const Navigation: FC = observer(() => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (screenState.currentScreen === 0) return <ButtonsBlock />;

  if (!mounted) return null;

  return (
    <Portal>
      <ButtonsBlock />
    </Portal>
  );
});

export default Navigation;
