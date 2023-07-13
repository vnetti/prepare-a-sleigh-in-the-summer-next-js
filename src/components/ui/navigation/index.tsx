import styles from './styles.module.scss'
import {FC} from "react";
import cn from "classnames";
import screen from "@store/screen";
import {observer} from "mobx-react-lite";

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
          <svg width="16" height="189" viewBox="0 0 16 189" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29288 0.292892C7.68341 -0.0976257 8.31657 -0.0976257 8.7071 0.292892L15.0711 6.65686C15.4616 7.04738 15.4616 7.68054 15.0711 8.07108C14.6805 8.46159 14.0474 8.46159 13.6568 8.07108L7.99999 2.41422L2.34314 8.07108C1.95261 8.46159 1.31945 8.46159 0.928924 8.07108C0.5384 7.68054 0.5384 7.04738 0.928924 6.65686L7.29288 0.292892ZM7 189L6.99999 1L8.99999 1L9 189L7 189Z" fill="white"/>
          </svg>
        </button> : ''}
      {screen.currentScreen < 5 ?
        <button disabled={screen.currentScreen < 1 || screen.currentScreen > 4} className={cn(styles.button, styles.button_next)} onClick={() => onClick('next')}>
          <span>далее</span>
          <svg width="16" height="189" viewBox="0 0 16 189" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29288 188.707C7.68341 189.098 8.31657 189.098 8.7071 188.707L15.0711 182.343C15.4616 181.953 15.4616 181.319 15.0711 180.929C14.6805 180.538 14.0474 180.538 13.6568 180.929L7.99999 186.586L2.34314 180.929C1.95261 180.538 1.31945 180.538 0.928924 180.929C0.5384 181.319 0.5384 181.953 0.928924 182.343L7.29288 188.707ZM7 -4.37114e-08L6.99999 188L8.99999 188L9 4.37114e-08L7 -4.37114e-08Z" fill="white"/>
          </svg>
        </button> : ''}
    </div>
  )
})

export default Navigation