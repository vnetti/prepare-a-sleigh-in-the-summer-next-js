import { makeAutoObservable } from 'mobx';

class Screen {
  currentScreen: number;

  constructor() {
    this.currentScreen = 3;
    makeAutoObservable(this);
  }

  setScreen(dir: 'next' | 'prev') {
    this.currentScreen = dir === 'next' ? this.currentScreen + 1 : this.currentScreen - 1;
  }
  closeDisclaimer() {
    this.currentScreen = 1;
  }
}

export default new Screen();
