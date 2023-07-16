import {useEffect, useState} from "react";
import MobileDetect from "mobile-detect";

const useMobileDetect = () => {

  const [md, setMd] = useState<MobileDetect | undefined>(undefined);

  const [detected, setDetected] = useState(false);

  useEffect(() => {
    setMd(new MobileDetect(navigator.userAgent));
    setDetected(true)
  }, [])

  const isMobile = !!md?.mobile()

  return {isDetected: detected, isMobile}
}

export default useMobileDetect