import styles from './styles.module.scss'
import {FC, useEffect, useState} from "react";
import cn from "classnames";
import screen from "@store/screen";
import {observer} from "mobx-react-lite";
import Portal from "@components/containers/portal";

const Navigation: FC = observer(() => {

  const onClick = (dir: 'next' | 'prev') => {
    if (screen.currentScreen !== 0) {
      screen.setScreen(dir)
    }
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    };
  }, []);

  if (!mounted) return null

  return (
    <Portal>
      <div className={styles.navigation}>
        {screen.currentScreen > 1 || screen.currentScreen === 0  ?
          <button disabled={screen.currentScreen <= 1} className={cn(styles.button, styles.button_prev)} onClick={() => onClick('prev')}>
            <span>назад</span>
            <svg className={cn(styles.arrow, styles.arrow_prev)} width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33516 82.9525C3.50683 83.1242 3.78516 83.1242 3.95682 82.9525L6.75432 80.155C6.92598 79.9833 6.92598 79.705 6.75432 79.5333C6.58265 79.3617 6.30432 79.3617 6.13265 79.5333L3.64599 82.02L1.15933 79.5333C0.987666 79.3617 0.709337 79.3617 0.537669 79.5333C0.366001 79.705 0.366001 79.9833 0.537669 80.155L3.33516 82.9525ZM3.20641 -1.92148e-08L3.20641 82.6417L4.08558 82.6417L4.08558 1.92148e-08L3.20641 -1.92148e-08Z" fill="white"/>
            </svg>
            {/*<Image className={cn(styles.arrow, styles.arrow_prev)} src={arrow} alt={'prev'}/>*/}
          </button> : ''}
        {screen.currentScreen < 5 ?
          <button disabled={screen.currentScreen < 1 || screen.currentScreen > 4} className={cn(styles.button, styles.button_next)} onClick={() => onClick('next')}>
            <span>далее</span>
            <svg className={styles.arrow} width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33516 82.9525C3.50683 83.1242 3.78516 83.1242 3.95682 82.9525L6.75432 80.155C6.92598 79.9833 6.92598 79.705 6.75432 79.5333C6.58265 79.3617 6.30432 79.3617 6.13265 79.5333L3.64599 82.02L1.15933 79.5333C0.987666 79.3617 0.709337 79.3617 0.537669 79.5333C0.366001 79.705 0.366001 79.9833 0.537669 80.155L3.33516 82.9525ZM3.20641 -1.92148e-08L3.20641 82.6417L4.08558 82.6417L4.08558 1.92148e-08L3.20641 -1.92148e-08Z" fill="white"/>
            </svg>
            {/*<Image className={styles.arrow} src={arrow} alt={'next'}/>*/}
          </button> : ''}
      </div>
    </Portal>
  )
})

export default Navigation