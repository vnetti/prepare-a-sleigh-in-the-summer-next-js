import styles from './styles.module.scss';
import { Children, FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

type breakpoints = 'sm' | 'md' | 'lg' | 'xl' | 'auto';

type propsType = {
  children: ReactNode;
  style?: {
    padding?: breakpoints;
    vertical?: 'start' | 'end' | 'center';
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
    gap?: breakpoints;
  };
  _class?: string
};

const Row: FC<PropsWithChildren<propsType>> = ({ children, style, _class }) => {
  return (
    <div className={cn(
      _class,
      styles.row,
      style?.padding && styles[`row_padding-${style.padding}`],
      style?.gap && styles[`row_gap-${style.gap}`],
      style?.justify && styles[`row_justify-${style.justify}`],
      style?.vertical && styles[`row_vertical-${style.vertical}`]
    )}>
      {Children.map(children, (child) => (
        <div className={styles.item}>{child}</div>
      ))}
    </div>
  );
};

export default Row;
