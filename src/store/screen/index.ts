import {makeAutoObservable} from "mobx";

class Screen {
  screen = 0

  constructor() {
    makeAutoObservable(this)
  }

  setScreen(dir: string) {
    this.screen = dir === 'down' ? this.screen + 1 : this.screen - 1
  }
}

export default new Screen()