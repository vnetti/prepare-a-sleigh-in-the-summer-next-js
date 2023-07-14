import Parallax from 'components/containers/parallax';
import Image from 'next/image';
import bg from '@assets/images/screens/third/keep_fox_Santa_Claus_at_the_disco_Hes_wearing_a_red_hood.jpg';
import confetti from '@assets/images/screens/third/confetti.png';
import styles from './styles.module.scss';
import cn from 'classnames';

const ThirdBackground = () => {
  return (
    <Parallax>
      <Image
        src={bg}
        alt="ЧТО ЖДЕТ ТВОЮ ЖОПКУ?"
        priority
        fill
        quality={100}
        placeholder={'blur'}
      />
      <Image className={cn('parallax_item', styles.top)} src={confetti} alt=""/>
      <Image className={cn('parallax_item', styles.bottom)} src={confetti} alt=""/>
    </Parallax>
  );
};

export default ThirdBackground;
