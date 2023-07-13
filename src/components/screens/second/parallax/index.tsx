import styles from './style.module.scss';
import { Children, FC, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import ParallaxJs from 'parallax-js';
import MobileDetect from 'mobile-detect';

type propsType = {
  children: ReactNode;
};

const Parallax: FC<PropsWithChildren<propsType>> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallaxInstance, setParallaxInstance] = useState<ParallaxJs | null>(null);
  const [md, setMd] = useState<MobileDetect | null>(null);

  useEffect(() => {
    setMd(new MobileDetect(navigator.userAgent));
    if (ref.current) {
      setParallaxInstance(
        new ParallaxJs(ref.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }
  }, []);

  if (parallaxInstance && md?.mobile()) parallaxInstance.limit(50, 50);

  return (
    <div className={styles.parallax} ref={ref}>
      {Children.map(children, (child, index) => (
        <div data-depth={(index + 1) * 0.5} className={styles.item}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Parallax;
