import Disclaimer from "./disclaimer";
import First from "@screens/first";
import Second from "@screens/second";
import screenState from "@store/screen";
import {observer} from "mobx-react-lite";
import Third from "@screens/third";
import Fourth from "@screens/fourth";
import Last from "@screens/last";
import useMobileDetect from "@hooks/use-mobile-detect";
import {useEffect, useState} from "react";
import usePermission from "@hooks/use-permission";

const App = observer(() => {

  const {isMobile, isDetected} = useMobileDetect()

  const [orientation, setOrientation] = useState('portrait-primary');

  const permission = usePermission()

  useEffect(() => {
    const orientationChange = () => {
      console.log(screen.orientation.type)
    }
    window.addEventListener('orientationchange', orientationChange)
    return () => {}
  }, []);


  if (isDetected) {
    // if (isMobile) return <Permission/>

    switch (screenState.currentScreen) {
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
  }
})

export default App
