import ThirdBackground from '@screens/third/background';
import Navigation from '@components/ui/navigation';
import Grid from './grid';
import LogoVector from '@components/ui/logo-vector';
import Heading from '@screens/third/heading';
import Text from '@screens/third/text';
import Column from '@components/containers/column';
import Card from 'components/screens/third/card';
import images from '@screens/third/images';
import classes from './card/style.module.scss'


export type ICard = {
  id: number;
  heading: string;
  when: string;
  content: string;
  labels: [{ id: number, text: string; img: any }, { id: number, text: string; img: SVGElement }];
};

const Third = () => {
  const data: ICard[] = [
    {
      id: 1,
      heading: 'Прибытие и разогрев',
      when: 'С 28 по 30 декабря',
      content:
        'С 28 по 30 декабря собираемся все вместе! Организуем встречу, ежедневные\xa0предновогодние застолья.\xa0Разогреваемся, так сказать.',
      labels: [
        { id: 1, text: 'вечерние посиделки у камина', img: images.fireplace },
        { id: 2, text: 'предновогодняя подготовка', img: images.christmasThree },
      ],
    },
    {
      id: 2,
      heading: 'Встреча Нового года',
      when: 'Ночь с 31 на 1 января',
      content:
        'Мы будем нарезать салаты, варить хинкали, готовить и пить аперитивы, а ты не забудь обсудить свои новогодние желания с нашим грузинским Дедом Морозом (который к нам придет со снегуркой дарить подарки).',
      labels: [
        { id: 1, text: 'много вкусной еды и музыки', img: images.disco },
        { id: 2, text: 'развлекательные, блять, интермедии', img: images.cutlery },
      ],
    },
    {
      id: 3,
      heading: 'Опохмелка',
      when: 'С 1 на 2 января',
      content:
        '1 января - время опомниться и опохмелиться. Будем отлеживаться как медведи после зимней спячки и восстанавливаться после новогоднего штурма.',
      labels: [
        { id: 1, text: 'упсарин упса', img: images.upsarin },
        { id: 2, text: 'боржоми', img: images.bottle },
      ],
    },
    {
      id: 4,
      heading: 'Хуярим дальше',
      when: 'С 2 по 6 января',
      content:
        'С 2 по 6 января выходим из пещеры и\xa0отправляемся в путешествие. Поедем на\xa0рождественскую ярмарку, как семейство оленей в поисках еловых веток,\xa0а затем накатаемся на горнолыжном курорте.',
      labels: [
        { id: 1, text: 'катаемся на лыжах и ватрушках', img: images.skier },
        { id: 2, text: 'пьем глинтвейн на ярмарке', img: images.fair },
      ],
    },
    {
      id: 5,
      heading: 'Конец или продолжение',
      when: 'После 6 января',
      content:
        'После 6 января - момент выбора: возвращаться домой или продолжать веселье в Тбилиси (кому как). Поедем разгуляться в столицу. Жрать и пить там. Ну, а оттуда уже допроводим всех домой, ибо нехуй так долго отдыхать.',
      labels: [
        { id: 1, text: 'смена локации', img: images.location },
        { id: 2, text: 'вечеринки не для всех', img: images.lock },
      ],
    },
  ];


  return (
    <section className="container container_full">
      <ThirdBackground />
      <Column isPressDown>
        <Grid>
          <LogoVector />
          <Heading />
          <Text />
        </Grid>
        <></>
          <div className={classes.row}>
            {data.map((card) => (
              <Card key={card.id} card={card}/>
            ))}
          </div>
      </Column>
      <Navigation />
    </section>
  );
};

export default Third;
