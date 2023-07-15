import Parallax from 'components/containers/parallax';
import Image from 'next/image';
import styles from './styles.module.scss'
import bg from '@assets/images/screens/last/keep_fox_smiling_Santa_Claus.jpg';
import tangerineRight from '@assets/images/screens/last/tangerine-right.png';
import tangerineBottom from '@assets/images/screens/last/tangerine-bottom.png';
import tangerineSpiceTop from '@assets/images/screens/last/tangerine-slice-top.png';
import tangerineSpiceBottom from '@assets/images/screens/last/tangerine-slice-bottom.png';

import cn from 'classnames';

const LastBackground = () => {
  return (
    <Parallax attributes={[
      {forChild: 1, attributes: {"data-depth": .2}},
      {forChild: 2, attributes: {"data-depth": .5}},
      {forChild: 3, attributes: {"data-depth": .7}},
      {forChild: 4, attributes: {"data-depth": .4}},
      {forChild: 5, attributes: {"data-depth": .3}},
    ]}>
      <Image
        src={bg}
        alt="НИХУЯ ПОДОБНОГО"
        priority
        fill
        quality={100}
        placeholder={'blur'}
      />
      <Image className={cn('parallax_item', styles.tangerine, styles.tangerine_right)} src={tangerineRight} alt=""/>
      <Image className={cn('parallax_item', styles.tangerine, styles.tangerine_bottom)} src={tangerineBottom} alt=""/>
      <Image className={cn('parallax_item', styles.tangerine, styles.tangerine_splice_top)} src={tangerineSpiceTop} alt=""/>
      <Image className={cn('parallax_item', styles.tangerine, styles.tangerine_splice_bottom)} src={tangerineSpiceBottom} alt=""/>
    </Parallax>
  );
};

export default LastBackground;
