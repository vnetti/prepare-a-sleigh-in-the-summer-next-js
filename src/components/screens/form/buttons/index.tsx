import classes from './style.module.scss';
import { FC } from 'react';

type propsType = {
  onSubmit: () => void;
  onLink: () => void;
};

const Buttons: FC<propsType> = ({ onLink, onSubmit }) => {
  return (
    <div className={classes.buttons}>
      <button onClick={onSubmit} tabIndex={5}>Зарегистрироваться</button>
      <button onClick={onLink}>Перейти в телеграм чат</button>
    </div>
  );
};

export default Buttons;
