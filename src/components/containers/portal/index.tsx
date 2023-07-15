import {FC, PropsWithChildren, ReactNode, useEffect, useLayoutEffect, useState} from "react";
import ReactDOM from 'react-dom';

type propsType = {
  children: ReactNode,
  isBackground?: boolean
}

const Portal: FC<PropsWithChildren<propsType>> = ({children, isBackground}) => {

  const [container, setContainer] = useState<HTMLElement>()



  useEffect(() => {
    if (container) {
      if (isBackground) {
        container.style.zIndex = '-1'
        container.style.overflow = 'hidden'
        container.style.position = 'absolute'
        container.style.top = '0'
        container.style.bottom = '0'
        container.style.left = '0'
        container.style.right = '0'
        container.style.position = 'fixed'
      }
      document.body.appendChild(container)
      return () => {
        document.body.removeChild(container)
      };
    } else setContainer( document.createElement('div'))
  }, [container]);

  if (container) {
    return ReactDOM.createPortal(children, container)
  }
}

export default Portal;
