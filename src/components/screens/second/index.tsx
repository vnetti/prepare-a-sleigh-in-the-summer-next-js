import React, { FC } from 'react';
import LogoVector from '@components/ui/logo-vector';
import Navigation from '@components/ui/navigation';
import StartLabel from '@components/ui/start-label';
import SecondTextBlock from '@screens/second/text-block';
import Grid from './grid';
import SecondBackground from '@screens/second/background';
import Heading from '@screens/second/heading';
import SecondLabels from '@screens/second/labels';


const Second: FC = ({}) => {

  return (
    <section className="container">
      <SecondBackground />
      <Grid>
        <LogoVector />
        <StartLabel style={'second'} />
        <Heading />
        <SecondTextBlock />
      </Grid>
      <SecondLabels />
      <Navigation />
    </section>
  );
};

export default Second;
