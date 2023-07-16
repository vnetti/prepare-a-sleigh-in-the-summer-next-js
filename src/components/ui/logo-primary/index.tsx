import logo from "@assets/images/logo-primary.png"
import styles from './style.module.scss'
import Image from "next/image";

const LogoPrimary = () => {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt={'Готовь сани летом | новогоднее грузинское безумие'} quality={100} width={280} height={180} />
    </div>
  )
}

export default LogoPrimary;