import LogoPrimary from '@components/ui/logo-primary';
import Text from '@screens/permission/text';
import { FC } from 'react';
import Grid from "@screens/permission/grid";
import PermissionButton from "@screens/permission/button";
import Heading from "@screens/permission/heading";
import usePermission from '@hooks/use-permission';

type propsType = {
  orientation?: string;
};

const Permission: FC<propsType> = ({}) => {
  const onPermission = usePermission();

  return (
    <section className="container container_full">
      <Grid>
        <LogoPrimary />
        <Heading/>
        <PermissionButton onClick={onPermission} />
        <Text />
      </Grid>
    </section>
  );
};

export default Permission;
