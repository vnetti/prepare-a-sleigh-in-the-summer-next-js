import {Children, FC, PropsWithChildren, ReactNode} from "react";
import classes from './styles.module.scss'
import cn from "classnames";

type propsType = {
  children: ReactNode
  isPressDown?: boolean
  permission?: boolean
}

const Column: FC<PropsWithChildren<propsType>> = ({children, isPressDown, permission}) => {
  return (
    <div className={cn(classes.column, permission && classes.column_permission)}>
      {Children.map(children, child => <div className={cn(classes.item, isPressDown && classes['item_press-down'])}>{child}</div>)}
    </div>
  )
}

export default Column