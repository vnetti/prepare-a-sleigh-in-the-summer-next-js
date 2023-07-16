import LogoPrimary from '@components/ui/logo-primary';
import StartLabel from '@components/ui/start-label';
import FirstTextBlock from '@screens/first/text-block';
import Navigation from '@components/ui/navigation';
import FirstBackground from '@screens/first/background';
import usePermission from "@hooks/use-permission";

const First = () => {

  const permission = usePermission()

  return (
    <section className={'container container_full'}>
      <FirstBackground />
      <LogoPrimary />
      <FirstTextBlock />
      <StartLabel />
      <Navigation />
      <button onClick={permission}>click</button>
    </section>
  );
};

export default First;
