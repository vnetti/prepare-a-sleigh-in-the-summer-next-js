import Parallax from 'components/containers/parallax';
import Image from 'next/image';
import bg from '@assets/images/screens/fourth/keep_fox_Santa_Claus_is_packing_his_suitcase_with_clothes.jpg';
import glare from '@assets/images/screens/fourth/glare.png';
import styles from './styles.module.scss';
import cn from 'classnames';

const FourthBackground = () => {
  return (
    <Parallax>
      <Image
        src={bg}
        alt="СУЧКА, ТЫ СОЗРЕЛА?"
        priority
        fill
        quality={100}
        placeholder={'blur'}
      />
      <Image className={cn('parallax_item', styles.glare)} src={glare} alt=""/>
    </Parallax>
  );
};

export default FourthBackground;
