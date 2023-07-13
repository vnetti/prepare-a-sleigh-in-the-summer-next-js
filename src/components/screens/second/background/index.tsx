import Parallax from '@screens/second/parallax';
import Image from 'next/image';
import bg from '@assets/images/screens/second/keep_fox_Santa_Claus_drinks_wine_with_one_hand.jpg';
import sprayTop from '@assets/images/screens/second/spray-top.png';
import sprayBottom from '@assets/images/screens/second/spray-bottom.png';

const SecondBackground = () => {
  return (
    <Parallax>
      <Image src={bg} alt="ЧТО, БЛЯТЬ, ПРОИСХОДИТ?" fill priority />
      <Image src={sprayTop} alt="" />
      <Image src={sprayBottom} alt="" />
    </Parallax>
  );
};

export default SecondBackground;
