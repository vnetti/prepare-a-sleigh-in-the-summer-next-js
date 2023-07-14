import FourthBackground from "@screens/fourth/background";
import Grid from "@screens/fourth/grid";
import Text from "@screens/fourth/text";
import Buttons from "@screens/fourth/buttons";
import Heading from "@screens/fourth/heading";
import Navigation from "@components/ui/navigation";
import LogoVector from "@components/ui/logo-vector";
import Labels from "@screens/fourth/labels";

const Fourth = () => {
  return (
    <section className="container">
      <FourthBackground/>
      <Grid>
        <LogoVector/>
        <Heading/>
        <Buttons/>
        <>
          <Text/>
          <Labels/>
        </>
      </Grid>
      <Navigation/>
    </section>
  )
}

export default Fourth