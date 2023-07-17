import LogoPrimary from '@components/ui/logo-primary';
import Phone from '@screens/orientation/phone';
import Text from '@screens/orientation/text';
import Column from '@components/containers/column';
import { FC } from 'react';

type propsType = {
  orientation?: string;
};

const Orientation: FC<propsType> = ({}) => {
  return (
    <section className="container container_full">
      <Column permission>
        <LogoPrimary />
        <Phone />
        <Text />
      </Column>
    </section>
  );
};

export default Orientation;
