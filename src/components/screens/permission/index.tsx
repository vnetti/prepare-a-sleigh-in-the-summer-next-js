import LogoPrimary from '@components/ui/logo-primary';
import Phone from '@screens/permission/phone';
import Text from '@screens/permission/text';
import Column from '@components/containers/column';
import {FC, useEffect, useMemo} from 'react';
import screenState from '@store/screen';
import { observer } from 'mobx-react-lite';
import usePermission from '@hooks/use-permission';
import useOrientationDetect from "@hooks/use-orientation-detect";


type propsType = {
  orientation?: string
}

const Permission: FC<propsType> = ({}) => {
  const { permission } = usePermission();

  return (
    <section className="container container_full">
      <Column permission>
        <LogoPrimary />
        <Phone />
        <Text />
      </Column>
    </section>
  );
}

export default Permission;
