import styles from './styles.module.scss'
import {FC} from "react";
import cn from "classnames";
import screen from "@store/screen";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import arrow from '@assets/images/arrow.svg'

const Navigation: FC = observer(() => {

  const onClick = (dir: 'next' | 'prev') => {
    if (screen.currentScreen !== 0) {
      screen.setScreen(dir)
    }
  }

  return (
    <div className={styles.navigation}>
      {screen.currentScreen > 1 || screen.currentScreen === 0  ?
        <button disabled={screen.currentScreen <= 1} className={cn(styles.button, styles.button_prev)} onClick={() => onClick('prev')}>
          <span>назад</span>
          <Image className={cn(styles.arrow, styles.arrow_prev)} src={arrow} alt={'prev'}/>
        </button> : ''}
      {screen.currentScreen < 5 ?
        <button disabled={screen.currentScreen < 1 || screen.currentScreen > 4} className={cn(styles.button, styles.button_next)} onClick={() => onClick('next')}>
          <span>далее</span>
          <Image className={styles.arrow} src={arrow} alt={'next'}/>
        </button> : ''}
    </div>
  )
})

export default Navigation