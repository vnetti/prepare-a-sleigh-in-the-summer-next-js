import ThirdBackground from "@screens/third/background";
import Navigation from "@components/ui/navigation";
import Grid from './grid'
import LogoVector from "@components/ui/logo-vector";
import Heading from "@screens/third/heading";
import Text from "@screens/third/text";
import Column from "@components/containers/column";
import Card from "components/screens/third/card";
import images from "@screens/third/images";
import GridCards from "@screens/third/grid-cards";

export type ICard = {
  heading: string;
  when: string;
  content: string;
  labels: [{ text: string; img: any }, { text: string; img: SVGElement }];
};

const Third = () => {
  const data: ICard[] = [
    {
      heading: 'Прибытие и разогрев',
      when: 'С 28 по 30 декабря',
      content:
        'С 28 по 30 декабря собираемся все вместе! Организуем встречу, ежедневные\xa0предновогодние застолья.\xa0Разогреваемся, так сказать.',
      labels: [
        { text: 'вечерние посиделки у камина', img: images.fireplace },
        { text: 'предновогодняя подготовка', img: images.christmasThree },
      ],
    },
    {
      heading: 'Встреча Нового года',
      when: 'Ночь с 31 на 1 января',
      content:
        'Мы будем нарезать салаты, варить хинкали, готовить и пить аперитивы, а ты не забудь обсудить свои новогодние желания с нашим грузинским Дедом Морозом (который к нам придет со снегуркой дарить подарки).',
      labels: [
        { text: 'много вкусной еды и музыки', img: images.disco },
        { text: 'развлекательные, блять, интермедии', img: images.cutlery },
      ],
    },
    {
      heading: 'Опохмелка',
      when: 'С 1 на 2 января',
      content:
        '1 января - время опомниться и опохмелиться. Будем отлеживаться как медведи после зимней спячки и восстанавливаться после новогоднего штурма.',
      labels: [
        { text: 'упсарин упса', img: images.upsarin },
        { text: 'боржоми', img: images.bottle },
      ],
    },
    {
      heading: 'Хуярим дальше',
      when: 'С 2 по 6 января',
      content:
        'С 2 по 6 января выходим из пещеры и\xa0отправляемся в путешествие. Поедем на\xa0рождественскую ярмарку, как семейство оленей в поисках еловых веток,\xa0а затем накатаемся на горнолыжном курорте.',
      labels: [
        { text: 'катаемся на лыжах и ватрушках', img: images.skier },
        { text: 'пьем глинтвейн на ярмарке', img: images.fair },
      ],
    },
    {
      heading: 'Конец или продолжение',
      when: 'После 6 января',
      content:
        'После 6 января - момент выбора: возвращаться домой или продолжать веселье в Тбилиси (кому как). Поедем разгуляться в столицу. Жрать и пить там. Ну, а оттуда уже допроводим всех домой, ибо нехуй так долго отдыхать.',
      labels: [
        { text: 'смена локации', img: images.location },
        { text: 'вечеринки не для всех', img: images.lock },
      ],
    },
  ];

  return (
    <section className='container container_full'>
      <ThirdBackground/>
      <Column>
        <Grid>
          <LogoVector/>
          <Heading/>
          <Text/>
        </Grid>
        <></>
        <GridCards>
          {data.map((card) => (
            <Card heading={card.heading} when={card.when} content={card.content} labels={card.labels} />
          ))}
        </GridCards>
      </Column>
      <Navigation/>
    </section>
  )
}

export default Third;