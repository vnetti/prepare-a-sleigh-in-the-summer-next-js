import {useEffect, useState} from "react";
import screenState from "@store/screen";

const useMobileDetect = () => {

  const [isDetected, setDetected] = useState(false);

  useEffect(() => {
    screenState.setIsMobile()
    setDetected(true)
  }, [])

  return isDetected
}

export default useMobileDetect