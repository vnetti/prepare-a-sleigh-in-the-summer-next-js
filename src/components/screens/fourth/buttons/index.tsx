import classes from './style.module.scss'

const Buttons = () => {
  return (
    <div className={classes.buttons}>
      <button>Зарегистрироваться</button>
      <button>Перейти в телеграм чат</button>
    </div>
  )
}

export default Buttons