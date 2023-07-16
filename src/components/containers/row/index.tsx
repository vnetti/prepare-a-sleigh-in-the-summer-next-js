import classes from './styles.module.scss';
import { Children, CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';
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
  _class?: string;
  styles?: CSSProperties;
};

const Row: FC<PropsWithChildren<propsType>> = ({ children, style, _class, styles }) => {
  return (
    <div
      className={cn(
        _class,
        classes.row,
        style?.padding && classes[`row_padding-${style.padding}`],
        style?.gap && classes[`row_gap-${style.gap}`],
        style?.justify && classes[`row_justify-${style.justify}`],
        style?.vertical && classes[`row_vertical-${style.vertical}`],
      )}
      style={{ ...styles }}
    >
      {Children.map(children, (child) => (
        <div className={classes.item}>{child}</div>
      ))}
    </div>
  );
};

export default Row;
