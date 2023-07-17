import Grid from '@screens/form/grid';
import LogoVector from '@components/ui/logo-vector';
import { Input } from '@screens/form/input';
import Buttons from '@screens/form/buttons';
import { FC, useCallback } from 'react';
import Heading from '@screens/form/heading';
import Portal from '@components/containers/portal';
import classes from './grid/styles.module.scss';
import CloseButton from '@components/ui/close-button';
import formState from '@store/form';
import { observer } from 'mobx-react-lite';
import Loader from '@components/ui/loader';

type propsType = {
  onLink: () => void;
  onClose: () => void;
};

const Form: FC<propsType> = observer(({ onLink, onClose }) => {
  const onsubmit = () => formState.onSubmit();

  const callbacks = {
    onFirstNameChange: useCallback((value: string) => formState.setFirstName(value), []),
    onLastNameChange: useCallback((value: string) => formState.setLastName(value), []),
  };

  return (
    <>
      <Portal _class={classes.portal}>
        <section className={'container container_full container_form'}>
          <Grid>
            <LogoVector />
            <Heading />
            <CloseButton onClick={onClose} />
            <Input
              value={formState.firstName}
              onChange={callbacks.onFirstNameChange}
              label="имя"
              name="saniletomFName"
              tabIndex={1}
            />
            <Input
              value={formState.lastName}
              onChange={callbacks.onLastNameChange}
              label="фамилия"
              name="saniletomLName"
              tabIndex={2}
            />
            <Input
              label="когда приезжаешь"
              tabIndex={3}
              pseudoText="когда приедешь - тогда приедешь, нахуй сейчас эта информация"
            />
            <Input
              label="вопросы есть? задавай"
              tabIndex={4}
              pseudoText="какие блять еще вопросы? не будем мы ни на что отвечать"
            />
            <Buttons onSubmit={onsubmit} onLink={onLink} />
          </Grid>
        </section>
      </Portal>
      {formState.isLoading ? (
        <Portal _class={classes.portal}>
          <Loader />
        </Portal>
      ) : (
        ''
      )}
    </>
  );
});

export default Form;
