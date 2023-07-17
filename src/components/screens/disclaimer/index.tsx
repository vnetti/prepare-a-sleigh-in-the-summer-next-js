import Heading from "components/screens/disclaimer/heading";
import DisclaimerTextBlock from "@screens/disclaimer/text-block";
import CloseButton from "@components/ui/close-button";
import screen from "@store/screen";
import LogoPrimary from "@components/ui/logo-primary";
import Grid from "@screens/disclaimer/grid";
import Navigation from "@components/ui/navigation";

const Disclaimer = () => {
  return (
    <section className={'container'}>
      <Grid>
        <LogoPrimary/>
        <Heading/>
        <DisclaimerTextBlock/>
        <CloseButton onClick={screen.onCloseDisclaimer}/>
        <Navigation/>
      </Grid>
    </section>
    // @todo доделать указатель на кнопки
  )
}

export default Disclaimer;