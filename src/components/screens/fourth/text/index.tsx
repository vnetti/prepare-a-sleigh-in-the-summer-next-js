import classes from './style.module.scss';
import useScrollbar from "@hooks/use-scrollbar";
import useResize from "@hooks/use-resize";
import 'overlayscrollbars/overlayscrollbars.css'

const Text = () => {

  const ref = useScrollbar(useResize(992))

  return (
    <div className={classes.text} ref={ref}>
      <p>
        Так что, собрались с нами на Новый год? Хорошо, но ты понимаешь, что мы тут не просто так на
        пустом месте стулья ставим, верно? Для&nbsp;этого нужно зарегистрироваться! Нет-нет, это не
        бюрократическая волокита, это просто наш способ убедиться, что у&nbsp;нас будет достаточно
        хинкали и вина для всех.
      </p>
      <p>
        А ты слышал про нашу эксклюзивную тусовку в Телеграме? Это место, где мы обсуждаем все
        возможные и невозможные планы на Новый год, от размера салатов до количества шариков на
        елке. Но прежде чем присоединиться, подумай - ты же не хочешь просто так влететь в&nbsp;нашу
        дружную компанию и сразу получить вал общения? Поэтому вступай только после регистрации,
        чтобы мы знали, что ты - не агент ФБР, а&nbsp;просто друг, который готов окунуться в грузинскую
        гостеприимность и сумасшедший новогодний адреналин!
      </p>
    </div>
  );
};

export default Text;
