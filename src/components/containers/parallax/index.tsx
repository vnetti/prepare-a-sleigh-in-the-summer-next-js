import styles from './style.module.scss';
import { Children, FC, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import ParallaxJs from 'parallax-js';
import MobileDetect from 'mobile-detect';

type attributesType = {
  'data-relative-input': boolean;
  'data-clip-relative-input': boolean;
  'data-hover-only': boolean;
  'data-input-element': null | HTMLElement | string;
  'data-calibrate-x': boolean;
  'data-calibrate-y': boolean;
};

type propsType = {
  children: ReactNode;
  options?: ParallaxJs.ParallaxOptions;
  attributes?: { forChild: number; attributes: {} }[];
};

const Parallax: FC<PropsWithChildren<propsType>> = ({ children, options, attributes }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallaxInstance, setParallaxInstance] = useState<ParallaxJs | null>(null);
  const [md, setMd] = useState<MobileDetect | null>(null);

  useEffect(() => {
    setMd(new MobileDetect(navigator.userAgent));
    if (ref.current) {
      setParallaxInstance(
        new ParallaxJs(ref.current, { invertX: false, invertY: false, ...options }),
      );
    }
  }, []);

  if (parallaxInstance) {
    if (md?.mobile()) {
      parallaxInstance.limit(50, 50);
    } else {
      parallaxInstance.limit(0, 0);
    }
  }

  const setAttributes = (index: number): string[] => {
    return attributes?.filter((item) => item.forChild === index + 1).map((item) => item.attributes);
  };

  useEffect(() => {
    if (ref.current && attributes) {
      Array.from(ref.current.children).forEach((child, index) => {
        setAttributes(index).forEach((attribute) => {
          // child.setAttribute(attribute)
        });
      });
    }
  }, []);

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
