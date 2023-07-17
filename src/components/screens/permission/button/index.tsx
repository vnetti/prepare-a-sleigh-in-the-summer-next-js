import styles from './styles.module.scss';
import { FC } from 'react';

type propsType = {
  onClick: () => void;
};

const PermissionButton: FC<propsType> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      ДАЮ ДОСТУП
    </button>
  );
};

export default PermissionButton;
