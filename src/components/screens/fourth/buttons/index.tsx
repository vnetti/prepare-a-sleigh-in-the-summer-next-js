import classes from './style.module.scss';
import { FC } from 'react';

type propsType = {
  onOpen: () => void;
  onLink: () => void;
};

const Buttons: FC<propsType> = ({ onLink, onOpen }) => {
  return (
    <div className={classes.buttons}>
      <button onClick={onOpen}>Зарегистрироваться</button>
      <button onClick={onLink}>Перейти в телеграм чат</button>
    </div>
  );
};

export default Buttons;
