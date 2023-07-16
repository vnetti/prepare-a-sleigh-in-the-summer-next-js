import styles from './styles.module.scss'

const Phone = () => {
  return (
    <div className={styles.phone}>
      <svg width="76" height="70" viewBox="0 0 76 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5957 7.96148C11.7813 8.06841 11.918 7.90138 12.073 7.85954C13.5812 7.45831 15.0611 8.44616 15.0662 10.0035C15.0793 14.305 15.0338 18.6098 14.9702 22.9133C14.9498 24.2118 13.8836 25.1815 12.6074 25.2017C11.3061 25.2221 10.2661 24.258 10.2451 22.9154C10.2177 21.2203 10.2613 19.5232 10.2714 17.8265C10.2723 17.5855 10.262 17.3446 10.2543 16.963C8.11921 20.2326 6.61819 23.6218 5.76674 27.264C3.5648 36.69 5.03117 45.4565 10.2402 53.5085C11.2881 55.1273 12.5365 56.5951 13.8566 57.9995C14.7712 58.9731 14.933 60.1529 14.2761 61.1382C13.6418 62.09 12.5469 62.3926 11.2608 61.9727C11.1928 61.9497 11.1176 61.9448 11.0453 61.9315C10.3207 61.2069 9.59609 60.4823 8.87148 59.7577C8.86795 59.5376 8.70753 59.411 8.58211 59.2659C7.42983 57.9421 6.42063 56.511 5.51238 55.0094C1.19191 47.8769 -0.565045 40.1021 0.218672 31.7438C0.840451 25.0767 3.06481 18.9436 6.95651 13.4205C7.70606 12.3562 8.50406 11.3236 9.27991 10.2772C10.0518 9.5053 10.8237 8.73339 11.5957 7.96148ZM66.1748 59.3826C66.2328 59.1286 66.4197 58.9555 66.5816 58.7715C67.5995 57.6184 68.4997 56.3759 69.3266 55.0853C74.0135 47.7731 76.0655 39.8028 75.3997 31.2323C74.7014 22.2581 71.2545 14.5059 64.9785 8.09496C64.0457 7.14244 62.5596 7.11581 61.671 7.99607C60.7234 8.93538 60.6951 10.4874 61.607 11.4527C62.963 12.8903 64.2543 14.3869 65.3227 16.0514C71.0184 24.9445 72.2573 34.5127 69.0967 44.7151C68.2437 47.47 66.9856 50.0504 65.313 52.5705C65.303 52.2962 65.2904 52.1514 65.2917 52.0065C65.3035 50.286 65.3167 48.5642 65.3312 46.8409C65.3381 45.9451 65.0316 45.1971 64.2588 44.7223C63.4734 44.2407 62.6476 44.2079 61.8117 44.674C60.9687 45.1442 60.5928 45.8791 60.5828 46.8083C60.5426 50.9891 60.5122 55.1711 60.4763 59.3533C60.4728 59.7266 60.5336 60.0827 60.6906 60.4225C61.2573 61.6584 62.3906 62.0184 64.0727 61.4874L66.1776 59.3826L66.1748 59.3826ZM57.4321 60.0041C57.569 43.128 57.7156 26.2532 57.8498 9.37713C57.8904 4.09169 54.2547 0.484077 48.9553 0.52762C41.7237 0.584892 34.4892 0.644977 27.2576 0.707821C21.8188 0.755441 18.1785 4.40402 18.1323 9.84692C18.0825 15.9724 18.0299 22.0979 17.9801 28.2234C17.8923 38.9002 17.8017 49.5771 17.7138 60.2539C17.6734 65.2161 21.1918 69.0101 26.0172 69.0127C33.6675 69.0143 41.3188 68.9155 48.97 68.8251C51.2576 68.7983 53.2205 67.8733 54.89 66.2976C56.5642 64.5213 57.4138 62.4323 57.4335 60.0055L57.4321 60.0041ZM48.21 6.99528C48.3456 5.74171 49.4354 5.08247 50.6587 5.51272C52.0985 6.02175 53.0586 7.33899 53.0842 8.93374C53.1063 10.3112 53.0754 11.6892 53.064 13.067C52.9334 28.6643 52.7958 44.263 52.6819 59.8601C52.6699 61.6001 52.0239 62.9141 50.4424 63.72C49.9021 63.9952 49.3191 64.0759 48.7201 64.0814C41.2656 64.1408 33.8123 64.2098 26.3579 64.2636C24.0439 64.2809 22.4606 62.7201 22.4779 60.4089C22.612 43.3838 22.7586 26.3599 22.9011 9.33467C22.9117 8.04326 23.4711 7.04765 24.4735 6.21092C25.3986 5.43758 26.351 5.63352 27.3182 5.89202C27.817 6.0253 27.7566 6.5357 27.7945 6.94768C28.0064 9.33611 29.2677 10.9236 31.4776 11.7668C32.1008 12.0048 32.7663 12.0488 33.435 12.0426C36.4608 12.0145 39.4881 11.9851 42.5138 11.9709C44.0894 11.9633 45.4565 11.4492 46.6628 10.2539C47.5163 9.39767 48.0739 8.29621 48.2155 6.99523L48.21 6.99528Z" fill="white"/>
      </svg>
    </div>
  )
}

export default Phone