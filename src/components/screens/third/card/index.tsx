import classes from './style.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { ICard } from '@screens/third';

const Card: FC<ICard> = (props) => {
  return (
    <article className={classes.card}>
      <div className={classes.heading}>
        <span>{props.when}</span>
        <h3>{props.heading}</h3>
      </div>
      <p className={classes.content}>{props.content}</p>
      <div className={classes.labels}>
        {props.labels.map((label) => (
          <p className={classes.label}>
            <span className={classes.image}>
              <Image src={label.img} alt={label.text} />
            </span>
            <span className={classes['label__text']}>{label.text}</span>
          </p>
        ))}
      </div>
    </article>
  );
};

export default Card;
