import styles from "./styles.module.scss";
import {FC} from "react";

type propsType = {
  onClick: () => void
}

const closeButton: FC<propsType> = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>закрыть</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <path d="M4 4L40.7158 41M41 4L4.28423 41" stroke="white" strokeWidth="6.72727" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

export default closeButton