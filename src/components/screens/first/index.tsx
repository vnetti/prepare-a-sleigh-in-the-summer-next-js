import LogoPrimary from '@components/ui/logo-primary';
import StartLabel from '@components/ui/start-label';
import FirstTextBlock from '@screens/first/text-block';
import Navigation from '@components/ui/navigation';
import FirstBackground from '@screens/first/background';
import { FC} from 'react';
import MobileDetect from 'mobile-detect';
import useParallax from '@hooks/use-parallax';

type propsType = {
  md: MobileDetect;
};

const First: FC<propsType> = ({ md }) => {
  const { ref, permission } = useParallax((instance) => {
    md.mobile() && instance.limit(80, 20)
  });

  return (
    <section className={'container'}>
      <FirstBackground refLink={ref} />
      <LogoPrimary />
      <FirstTextBlock />
      <StartLabel />
      <Navigation currentScreen={1} />
      <button onClick={permission}>click</button>
    </section>
  );
};

export default First;
