import Parallax from 'components/containers/parallax';
import Image from 'next/image';
import bg from '@assets/images/screens/second/keep_fox_Santa_Claus_drinks_wine_with_one_hand.jpg';
import sprayTop from '@assets/images/screens/second/spray-top.png';
import sprayBottom from '@assets/images/screens/second/spray-bottom.png';
import styles from './styles.module.scss';
import cn from 'classnames';

const SecondBackground = () => {
  return (
    <Parallax attributes={[
      {forChild: 1, attributes: {"data-depth": .2}},
      {forChild: 2, attributes: {"data-depth": .5}},
      {forChild: 3, attributes: {"data-depth": .7}}
    ]}>
      <Image
        src={bg}
        alt="ЧТО, БЛЯТЬ, ПРОИСХОДИТ?"
        priority
        fill
        quality={100}
        placeholder={'blur'}
      />
      <Image className={cn('parallax_item', styles.top)} src={sprayTop} alt=""/>
      <Image className={cn('parallax_item', styles.bottom)} src={sprayBottom} alt=""/>
    </Parallax>
  );
};

export default SecondBackground;
