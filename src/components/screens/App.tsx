import Disclaimer from "./disclaimer";
import First from "@screens/first";
import Second from "@screens/second";
import screen from "@store/screen";
import {observer} from "mobx-react-lite";
import Third from "@screens/third";
import Fourth from "@screens/fourth";
import Last from "@screens/last";

const App = observer(() => {

  switch (screen.currentScreen) {
    case 1:
      return <First/>
    case 2:
      return <Second/>
    case 3:
      return <Third/>
    case 4:
      return <Fourth/>
    case 5:
      return <Last/>
    default:
      return <Disclaimer/>
  }
})

export default App
