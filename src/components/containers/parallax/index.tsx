import styles from './style.module.scss';
import { Children, FC, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react';
import ParallaxJs from 'parallax-js';
import MobileDetect from 'mobile-detect';
import Portal from "@components/containers/portal";

type attributesType = {
  'data-relative-input'?: boolean;
  'data-clip-relative-input'?: boolean;
  'data-hover-only'?: boolean;
  'data-input-element'?: HTMLElement | string;
  'data-calibrate-x'?: boolean;
  'data-calibrate-y'?: boolean;
  'data-invert-x'?: boolean;
  'data-invert-y'?: boolean;
  'data-limit-x'?: false | number;
  'data-limit-y'?: false | number;
  'data-scalar-x'?: number;
  'data-scalar-y'?: number;
  'data-friction-x'?: number;
  'data-friction-y'?: number;
  'data-origin-x'?: number;
  'data-origin-y'?: number;
  'data-precision'?: number;
  'data-selector'?: string;
  'data-pointer-events'?: boolean;
  'data-depth'?: number;
};

type propsType = {
  children: ReactNode;
  options?: ParallaxJs.ParallaxOptions;
  attributes?: { forChild: number; attributes: attributesType }[];
};

const Parallax: FC<PropsWithChildren<propsType>> = ({ children, options, attributes }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallaxInstance, setParallaxInstance] = useState<ParallaxJs | null>(null);
  const [md, setMd] = useState<MobileDetect | null>(null);

  useEffect(() => {
    const getAttributes = (index: number) => {
      if (attributes) {
        const childAttributes = attributes
          .filter((item) => item.forChild === index + 1)
          .map((attribute) => attribute.attributes)[0];
        if (childAttributes) {
          return new Map(Object.entries(childAttributes));
        }
      }
    };

    if (ref.current && attributes) {
      ref.current.setAttribute('data-depth', '2')
      Array.from(ref.current.children).forEach((child, index) => {
        const attributes = getAttributes(index);
        if (attributes) {
          getAttributes(index)?.forEach((value, attribute) => {
            child.setAttribute(attribute, `${value}`);
          });
        }
      });
    }
  }, []);

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
      parallaxInstance.limit(false, false);
    }
  }

  return (
    <Portal isBackground>
      <div className={styles.parallax} ref={ref}>
        {Children.map(children, (child, index) => (
          <div data-depth={(index + 1) * 0.5} className={styles.item}>
            {child}
          </div>
        ))}
      </div>
    </Portal>
  );
};

export default Parallax;
