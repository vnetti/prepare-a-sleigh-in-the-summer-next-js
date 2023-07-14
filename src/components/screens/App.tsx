import Disclaimer from "./disclaimer";
import First from "@screens/first";
import Second from "@screens/second";
import screen from "@store/screen";
import {observer} from "mobx-react-lite";
import Third from "@screens/third";
import Fourth from "@screens/fourth";

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
    default:
      return <Disclaimer/>
  }
})

export default App
