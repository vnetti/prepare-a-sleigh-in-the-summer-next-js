import { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

const useScrollbar = (hasScroll: boolean) => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollbars: OverlayScrollbars;

    if (root.current && hasScroll) {
      scrollbars = OverlayScrollbars(root.current, { scrollbars: {theme: 'os-theme-light'}});

      return () => {
        if (scrollbars) scrollbars.destroy();
      };
    }
  }, [hasScroll]);

  return root
};

export default useScrollbar;
