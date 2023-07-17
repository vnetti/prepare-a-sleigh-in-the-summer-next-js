import { action, makeObservable, observable } from 'mobx';
import MobileDetect from 'mobile-detect';

type orientationType = 'landscape' | 'portrait' | 'unknown';
type screensType = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

class Screen {
  currentScreen: number;
  private prevScreen: screensType;

  isGranted: boolean | 'unknown';
  private orientation: orientationType;

  private isMobile: boolean | 'unknown';
  private isIos: boolean;
  private userAgent: string;

  constructor() {
    this.currentScreen = 0;
    this.prevScreen = this.currentScreen as screensType;

    this.isGranted = 'unknown';
    this.orientation = 'unknown';
    this.isMobile = true;
    this.isIos = true;

    this.userAgent = 'unknown';

    makeObservable(this, {
      isGranted: observable,
      currentScreen: observable,
      setOrientation: action,
      onNextScreen: action,
      onPrevScreen: action,
      onCloseDisclaimer: action,
      setIsGranted: action,
      onClosePermission: action
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
   * Смена экрана для запроса перевернуть устройство не для IOS
   */
  private onPermissionScreenNotIos = () => {
    if (this.isMobile) {
      if (this.orientation === 'landscape') {
        this.setScreen(this.prevScreen);
      } else {
        this.setScreen(-1);
      }
    }
  };

  /**
   * Смена экрана для запроса перевернуть устройство для IOS
   */
  private onPermissionScreenIos = () => {
    if (this.isMobile) {
      if (this.orientation !== 'landscape') this.setScreen(-1);
      else if (this.isGranted && this.isGranted !== 'unknown') {
        this.setScreen(this.prevScreen);
      } else if (this.isGranted === 'unknown') {
        this.setIsGranted(this.getSessionGranted())
        this.setScreen(-2);
      } else this.setScreen(this.prevScreen);
    }
  };

  /**
   * Сменить текущий экран по направлению или конкретный
   * @param {'next' | 'prev' | screensType} dir направление или конкретный номер экрана в диапазоне от
   */
  private setScreen = (dir: 'next' | 'prev' | screensType) => {
    if (this.currentScreen >= 0) this.setPrevScreen(this.currentScreen as screensType);

    switch (dir) {
      case 'next':
        return (this.currentScreen += 1);
      case 'prev':
        return (this.currentScreen -= 1);
      default:
        return (this.currentScreen = dir);
    }
  };

  /**
   * Восстановление доступа к акселерометру из Window.sessionStorage
   */
  private getSessionGranted = () => {
    let sessionGranted: boolean | 'unknown';
    switch (sessionStorage.getItem('isGranted') as 'true' | 'false' | 'unknown' | undefined) {
      case 'true':
        sessionGranted = true;
        break;
      case 'false':
        sessionGranted = false;
        break;
      case undefined:
        sessionGranted = 'unknown';
        break;
      default:
        sessionGranted = 'unknown';
    }
    return sessionGranted
  }

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
   * Закрывает экран запроса на разрешение на использование акселерометра
   */
  onClosePermission = () => {
    this.setScreen(0)
  }

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
    this.isIos ? this.onPermissionScreenIos() : this.onPermissionScreenNotIos();
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
    this.isIos = md.is('IOS');
  };

  /**
   * Устанавливаем разрешение на использование акселерометра
   */
  setIsGranted = (value: boolean | 'unknown') => {
    const sessionGranted = this.getSessionGranted()
    if (value !== sessionGranted) sessionStorage.setItem('isGranted', value.toString());

    this.isGranted = value;
  };

}

export default new Screen();
