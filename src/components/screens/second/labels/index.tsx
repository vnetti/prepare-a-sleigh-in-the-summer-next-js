import styles from './styles.module.scss';
import Row from '@components/containers/row';
import wine from '@assets/images/screens/second/wine.svg';
import dumpling from '@assets/images/screens/second/dumpling.svg';
import dance from '@assets/images/screens/second/dance.svg';
import Image from 'next/image';

const SecondLabels = () => {
  const labels = [
    {
      id: 1,
      alt: 'безлимитное вино',
      title: 'безлимитное вино',
      src: wine,
      className: 'wine',
    },
    {
      id: 2,
      alt: 'много грузинской еды',
      title: `много грузинской\xa0еды`,
      src: dumpling,
      className: 'dumpling',
    },
    {
      id: 3,
      alt: 'ахуенные развлечения',
      title: 'ахуенные развлечения',
      src: dance,
      className: 'dance',
    },
  ];
  return (
    <div className={styles.labels}>
      <Row style={{ gap: 'auto' }}>
        {labels.map((label) => (
          <p key={label.id} data-content={label.title} className={styles.label}>
            <Image className={styles[label.className]} src={label.src} alt={label.alt} />
          </p>
        ))}
      </Row>
    </div>
  );
};

export default SecondLabels;
