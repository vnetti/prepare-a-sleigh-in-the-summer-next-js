import { action, makeObservable, observable } from 'mobx';
import MobileDetect from 'mobile-detect';

type orientationType = 'landscape' | 'portrait' | 'unknown';
type screensType = -1 | 0 | 1 | 2 | 3 | 4 | 5;

class Screen {
  currentScreen: number;
  private prevScreen: screensType;
  private orientation: orientationType;
  private isMobile: boolean | 'unknown';
  private readonly maxScreen: number;
  private readonly minScreen: number;
  private userAgent: string;

  constructor() {
    this.currentScreen = 0;
    this.prevScreen = this.currentScreen as screensType;

    this.minScreen = -1;
    this.maxScreen = 5;

    this.orientation = 'unknown';
    this.isMobile = true;

    this.userAgent = 'unknown';

    makeObservable(this, {
      currentScreen: observable,
      setOrientation: action,
      onNextScreen: action,
      onPrevScreen: action,
      onCloseDisclaimer: action,
    });
  }

  /**
   * Устанавливаем user-agent клиента
   * @param {string} userAgent
   */
  private setUserAgent = (userAgent: string) => {
    this.userAgent = userAgent;
  };

  /**
   * Запоминаем прошлый экран
   * @param {screensType} screen
   */
  private setPrevScreen = (screen: screensType) => {
    if (screen !== -1) this.prevScreen = screen;
  };

  /**
   * Смена экрана для запроса перевернуть устройство
   */
  private onPermissionScreen = () => {
    if (this.isMobile) {
      if (this.orientation === 'landscape') {
        this.setScreen(this.prevScreen);
      } else {
        this.setScreen(-1);
      }
    }
  };

  /**
   * Сменить текущий экран по направлению или конкретный
   * @param {'next' | 'prev' | screensType} dir направление или конкретный номер экрана в диапазоне от
   */
  private setScreen = (dir: 'next' | 'prev' | screensType) => {
    this.setPrevScreen(this.currentScreen as screensType);

    switch (dir) {
      case 'next':
        return (this.currentScreen += 1);
      case 'prev':
        return (this.currentScreen -= 1);
      default:
        return (this.currentScreen = dir);
    }
  };

  // ------------------------
  //
  // ACTIONS
  //

  /**
   * Переход на предыдущий экран
   */
  onNextScreen = () => {
    if (this.currentScreen < 5) this.setScreen('next');
  };

  /**
   * Переход на след экран
   */
  onPrevScreen = () => {
    if (this.currentScreen > 1) this.setScreen('prev');
  };

  /**
   * Закрывает дисклеймер -> переход на первый экран
   */
  onCloseDisclaimer = () => {
    this.setScreen(1);
  };

  /**
   * Запоминает ориентацию устройства
   * @param {orientationType} value
   */
  setOrientation = (value: orientationType) => {
    this.orientation = value;
    this.onPermissionScreen();
  };

  /**
   * Устанавливаем мобильное устройство или нет
   */
  setIsMobile = () => {
    this.setUserAgent(
      navigator?.userAgent ||
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    );

    const md = new MobileDetect(this.userAgent);
    this.isMobile = !!md.mobile();
  };
}

export default new Screen();
