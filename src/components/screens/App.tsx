import Disclaimer from './disclaimer';
import First from '@screens/first';
import Second from '@screens/second';
import screenState from '@store/screen';
import { observer } from 'mobx-react-lite';
import Third from '@screens/third';
import Fourth from '@screens/fourth';
import Last from '@screens/last';
import useMobileDetect from '@hooks/use-mobile-detect';
import Orientation from 'components/screens/orientation';
import useOrientationDetect from '@hooks/use-orientation-detect';
import Permission from "@screens/permission";

const App = observer(() => {
  const isDetected = useMobileDetect();
  useOrientationDetect();

  if (isDetected) {
    switch (screenState.currentScreen) {
      case -2:
        return <Permission />;
      case -1:
        return <Orientation />;
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Fourth />;
      case 5:
        return <Last />;
      default:
        return <Disclaimer />;
    }
  }
});

export default App;
