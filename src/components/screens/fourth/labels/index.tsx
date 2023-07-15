import classes from './style.module.scss';
import Image from 'next/image';
import warning from '@assets/images/screens/fourth/warning.svg';
import poop from '@assets/images/screens/fourth/poop.svg';

const Labels = () => {
  const labels = [
    {
      id: 1,
      img: warning,
      text: 'действие не имеет обратной\xa0силы',
    },
    {
      id: 2,
      img: poop,
      text: 'не просри момент\xa0только',
    },
  ];

  return (
    <div className={classes.labels}>
      {labels.map((label) => (
        <p key={label.id} className={classes.label}>
          <span className={classes.image}>
            <Image src={label.img} alt={label.text} />
          </span>
          <span className={classes['label__text']}>{label.text}</span>
        </p>
      ))}
    </div>
  );
};

export default Labels;
