import classes from './style.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { ICard } from '@screens/third';

type propsType = {
  card: ICard
}

const Card: FC<propsType> = ({card}) => {
  const {when, heading, labels, content} = card
  return (
    <article className={classes.card}>
      <div className={classes.heading}>
        <span>{when}</span>
        <h3>{heading}</h3>
      </div>
      <p className={classes.content}>{content}</p>
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
    </article>
  );
};

export default Card;
