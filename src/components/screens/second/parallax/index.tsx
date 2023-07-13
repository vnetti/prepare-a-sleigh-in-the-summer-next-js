import styles from './style.module.scss';
import { Children, FC, PropsWithChildren, ReactNode } from 'react';

type propsType = {
  children: ReactNode;
};

const Parallax: FC<PropsWithChildren<propsType>> = ({ children }) => {
  return (
    <div className={styles.parallax}>
      {Children.map(children, (child) => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};

export default Parallax;
