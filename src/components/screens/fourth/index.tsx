import FourthBackground from '@screens/fourth/background';
import Grid from '@screens/fourth/grid';
import Text from '@screens/fourth/text';
import Buttons from '@screens/fourth/buttons';
import Heading from '@screens/fourth/heading';
import Navigation from '@components/ui/navigation';
import LogoVector from '@components/ui/logo-vector';
import Labels from '@screens/fourth/labels';
import { useState } from 'react';
import Form from "@screens/form";
import cn from "classnames";

const Fourth = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onOpen = () => {
    setIsOpened(true);
  };
  const onClose = () => {
    setIsOpened(false);
  }
  const onLink = () => {
    window.open('https://t.me/+p0zdlhZHiPwzMTNi', '_blank');
  };

  return (
    <section className={cn("container", isOpened && "container_fixed")}>
      <FourthBackground />
      <Grid>
        <LogoVector />
        <Heading />
        <Buttons onLink={onLink} onOpen={onOpen} />
        <>
          <Text />
          <Labels />
        </>
      </Grid>
      <Navigation />
      {isOpened ? <Form onLink={onLink} onClose={onClose} /> : ''}
    </section>
  );
};

export default Fourth;
