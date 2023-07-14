import styles from './styles.module.scss';
import { Children, FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

type propsType = {
  children: ReactNode;
};

const Grid: FC<PropsWithChildren<propsType>> = ({ children }) => {
  return (
    <div className={cn(styles.grid)}>
      {Children.map(children, (child) => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};

export default Grid;
