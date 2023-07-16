import LogoPrimary from '@components/ui/logo-primary';
import StartLabel from '@components/ui/start-label';
import FirstTextBlock from '@screens/first/text-block';
import Navigation from '@components/ui/navigation';
import FirstBackground from '@screens/first/background';

const First = () => {

  return (
    <section className={'container container_full'}>
      <FirstBackground />
      <LogoPrimary />
      <FirstTextBlock />
      <StartLabel />
      <Navigation />
    </section>
  );
};

export default First;
