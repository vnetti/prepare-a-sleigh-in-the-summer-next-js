import { FC } from 'react';
import LogoVector from '@components/ui/logo-vector';
import Navigation from '@components/ui/navigation';
import StartLabel from '@components/ui/start-label';
import MobileDetect from 'mobile-detect';
import SecondTextBlock from '@screens/second/text-block';
import Grid from './grid';
import SecondBackground from '@screens/second/background';
import Heading from '@screens/second/heading';
import SecondLabels from '@screens/second/labels';
import useContainerHeight from '@hooks/use-container-height';

type propsType = {
  md: MobileDetect;
};

const Second: FC<propsType> = ({}) => {
  const ref = useContainerHeight();

  return (
    <section className="container" ref={ref}>
      <SecondBackground />
      <Grid>
        <LogoVector />
        <StartLabel style={'second'} />
        <Heading />
        <SecondTextBlock />
      </Grid>
      <SecondLabels />
      <Navigation currentScreen={2} />
    </section>
  );
};

export default Second;
