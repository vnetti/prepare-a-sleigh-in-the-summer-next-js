import MobileDetect from "mobile-detect";
// import Disclaimer from "./disclaimer";
// import First from "@screens/first";
import Second from "@screens/second";
import {useEffect, useState} from "react";

function App() {

  const [md, setMd] = useState(new MobileDetect('Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15'));

  useEffect(() => {
    setMd(new MobileDetect(window.navigator.userAgent))
  }, [])


  return (
    <>
      {/*<Disclaimer/>*/}
      {/*<First md={md}/>*/}
      <Second md={md}/>
    </>
  )
}

export default App
