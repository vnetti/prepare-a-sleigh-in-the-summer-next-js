import LogoPrimary from "@components/ui/logo-primary";
import styles from "./styles.module.scss"

const DisclaimerHeader = () => {
  return (
    <header className={styles.header}>
      <LogoPrimary/>
      <h2 className={styles.heading}>Дисклеймер</h2>
      <button className={styles.button}>
        <span>закрыть</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M4 4L40.7158 41M41 4L4.28423 41" stroke="white" strokeWidth="6.72727" strokeLinecap="round"/>
        </svg>
      </button>
    </header>
  )
}

export default DisclaimerHeader;