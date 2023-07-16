import logo from "@assets/images/logo-vector.svg"
import styles from './style.module.scss'
import Image from "next/image";

const LogoVector = () => {
  return (
    <div className={styles.logo}>
      <Image priority src={logo} alt="Готовь сани летом | новогоднее грузинское безумие"/>
    </div>
  )
}

export default LogoVector;