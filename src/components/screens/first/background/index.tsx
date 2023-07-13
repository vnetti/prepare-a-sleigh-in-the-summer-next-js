import styles from './styles.module.scss';
import cn from 'classnames';
import {FC} from "react";
import Parallax from "@screens/second/parallax";
import bg from '@assets/images/screens/first/keep_fox_View_from_above.jpg'
import palmRight from '@assets/images/screens/first/palm-right.png'
import palmBottom from '@assets/images/screens/first/palm-bottom.png'
import Image from "next/image";

const FirstBackground: FC = ({}) => {
  return (
    <Parallax>
      <Image src={bg} alt={'Пиздатое событие уходящего года!'} fill quality='100' priority placeholder={'blur'}/>
      <Image className={cn('parallax_item', styles.right)} src={palmRight} alt=""/>
      <Image className={cn('parallax_item', styles.bottom)} src={palmBottom} alt=""/>
    </Parallax>

  );
};

export default FirstBackground;
