import LogoPrimary from '@components/ui/logo-primary';
import StartLabel from '@components/ui/start-label';
import FirstTextBlock from '@screens/first/text-block';
import Navigation from '@components/ui/navigation';
import FirstBackground from '@screens/first/background';
import {FC, useEffect, useState} from 'react';
import useParallax from '@hooks/use-parallax';
import MobileDetect from "mobile-detect";



const First: FC = ({ }) => {

  const [md, setMd] = useState<MobileDetect | null>(null);

  const { permission } = useParallax((instance) => {
    md?.mobile() && instance.limit(80, 20)
  });

  useEffect(() => {
    setMd(new MobileDetect(navigator.userAgent))
  }, [])

  return (
    <section className={'container container_full'}>
      <FirstBackground />
      <LogoPrimary />
      <FirstTextBlock />
      <StartLabel />
      <Navigation />
      <button onClick={permission}>click</button>
    </section>
  );
};

export default First;
