import styles from './style.module.scss';
import cn from 'classnames';

const StartLabel = ({ style = 'first' }) => {
  return (
    <div
      className={cn(
        styles.startLabel,
        style === 'first'
          ? styles.startLabel_first
          : style === 'second'
          ? styles.startLabel_second
          : '',
      )}
    >
      <p>Стартуем 28 декабря</p>
    </div>
  );
};

export default StartLabel;
