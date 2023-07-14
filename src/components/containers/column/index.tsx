import {Children, FC, PropsWithChildren, ReactNode} from "react";
import classes from './styles.module.scss'

type propsType = {
  children: ReactNode
}

const Column: FC<PropsWithChildren<propsType>> = ({children}) => {
  return (
    <div className={classes.column}>
      {Children.map(children, child => <div className={classes.item}>{child}</div>)}
    </div>
  )
}

export default Column