import LastBackground from "@screens/last/background";
import Grid from "@screens/fourth/grid";
import Text from "@screens/last/text";
import Heading from "@screens/last/heading";
import Navigation from "@components/ui/navigation";
import LogoVector from "@components/ui/logo-vector";

const Last = () => {
  return (
    <section className="container">
      <LastBackground/>
      <Grid>
        <LogoVector/>
        <Heading/>
        <Text/>
      </Grid>
      <Navigation/>
    </section>
  )
}

export default Last