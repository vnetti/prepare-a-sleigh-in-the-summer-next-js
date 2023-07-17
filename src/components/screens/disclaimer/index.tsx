import Heading from 'components/screens/disclaimer/heading';
import DisclaimerTextBlock from '@screens/disclaimer/text-block';
import CloseButton from '@components/ui/close-button';
import screen from '@store/screen';
import LogoPrimary from '@components/ui/logo-primary';
import Grid from '@screens/disclaimer/grid';
import Navigation from '@components/ui/navigation';
import {useEffect} from "react";

const Disclaimer = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  return (
    <section className={'container'}>
      <Grid>
        <LogoPrimary />
        <Heading />
        <DisclaimerTextBlock />
        <CloseButton onClick={screen.onCloseDisclaimer} />
        <span>Управление сайтом <br/> НАЖАТИЕМ, <br/> А НЕ СКРОЛЛОМ, БЛЯТЬ</span>
        <Navigation />
      </Grid>
    </section>
  );
};

export default Disclaimer;
