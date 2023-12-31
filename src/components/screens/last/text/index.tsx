import classes from './style.module.scss';
import useScrollbar from "@hooks/use-scrollbar";
import useResize from "@hooks/use-resize";
import 'overlayscrollbars/overlayscrollbars.css'


const Text = () => {

  const ref = useScrollbar(useResize(992))

  return (
    <div className={classes.text} ref={ref}>
      <p>
        Итак, мои смелые зимние вояки, прежде чем вы распахнете двери своего дома и броситесь в
        Грузию, давайте затронем один важный момент. Да-да, не убегайте, это важно! Этот сайт, хотя
        и представляет собой огнище нашей новогодней истерии, все же не является публичной офертой.
      </p>
      <p>
        Что?! Как?! Нет, мы не обманываем вас, просто соблюдаем форму. Это не маленький шрифт
        на договоре, который вы пропускаете. Это просто означает, что если мы вдруг решим, что нужно
        больше хинкали или меньше вина (что, конечно, невозможно, но все же), мы можем изменить
        программу.
      </p>
      <p>
        Так что, пожалуйста, не пытайтесь судиться с нами, если вдруг наступите на вилку вместо
        новогоднего огонька. Ведь мы уже весьма усердствуем, создавая этот фееричный праздник!
      </p>
    </div>
  );
};

export default Text;
