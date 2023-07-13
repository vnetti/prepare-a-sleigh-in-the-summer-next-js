import Disclaimer from "./disclaimer";
import First from "@screens/first";
import Second from "@screens/second";
import screen from "@store/screen";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  //
  // const [md, setMd] = useState(new MobileDetect('Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15'));
  //
  // useEffect(() => {
  //   setMd(new MobileDetect(window.navigator.userAgent))
  // }, [])

  switch (screen.currentScreen) {
    case 1:
      return <First/>
    case 2:
      return <Second/>
    default:
      return <Disclaimer/>
  }
})

export default App
