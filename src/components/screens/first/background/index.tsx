import styles from './styles.module.scss';
import cn from 'classnames';
import {FC, RefObject} from "react";

type TFirstBackground = {
  refLink?: RefObject<HTMLDivElement>
}

const FirstBackground: FC<TFirstBackground> = ({refLink}) => {
  return (
    <div id='scene' className={styles.parallax} ref={refLink}>
      <div data-depth='0.3' className={styles.item}>
        <div className={cn(styles.background)}/>
      </div>
      <div data-depth='0.9' className={styles.item}>
        <div className={cn(styles.palm, styles.palm_right)}/>
      </div>
      <div data-depth='0.5' className={styles.item}>
        <div className={cn(styles.palm, styles.palm_bottom)}/>
      </div>
    </div>
  );
};

export default FirstBackground;
