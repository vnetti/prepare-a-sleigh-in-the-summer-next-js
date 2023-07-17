import { FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type propsType = {
  children: ReactNode;
  isBackground?: boolean;
  _class?: string;
};

const Portal: FC<PropsWithChildren<propsType>> = ({ children, isBackground, _class }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {

    if (_class) container.className = _class

    if (isBackground) {
      container.style.zIndex = '-1';
      container.style.overflow = 'hidden';
      container.style.position = 'absolute';
      container.style.top = '0';
      container.style.bottom = '0';
      container.style.left = '0';
      container.style.right = '0';
      container.style.position = 'fixed';
    }
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
