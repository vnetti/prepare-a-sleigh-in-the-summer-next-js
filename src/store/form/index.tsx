import { makeAutoObservable } from 'mobx';

class Form {
  firstName: string;
  lastName: string;
  isLoading: boolean;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.isLoading = false;

    makeAutoObservable(this);
  }

  setFirstName(value: string) {
    this.firstName = value;
  }
  setLastName(value: string) {
    this.lastName = value;
  }

  private onClearField = () => {
    this.firstName = '';
    this.lastName = '';
  };
  private spaceChecking = (str: string) => {
    return str.trim() !== '';
  };
  private setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  onSubmit = async () => {
    if (!this.spaceChecking(this.firstName) || !this.spaceChecking(this.lastName)) {
      alert('В полях Имя и Фамилия должны быть данные !');
    } else {
      this.setIsLoading(true);

      const response = await fetch('api/send-mail', {
        method: 'POST',
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
        }),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      const json = await response.json();
      this.setIsLoading(false);
      if (json.ok) {
        this.onClearField();
        alert(
          'Спасибо! Твоя заявка отправлена деду морозу. Если ты не говно человек - то с тобой свяжутся',
        );
      } else alert('Ну и что ты уже сломал? Что-то пошло не так, попробуй позже!');
    }
  };

  sendgrid = async () => {
    if (!this.spaceChecking(this.firstName) || !this.spaceChecking(this.lastName)) {
      alert('В полях Имя и Фамилия должны быть данные !');
    } else {
      this.setIsLoading(true);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: this.firstName, lastName: this.lastName }),
      });
      const json = await response.json();
      this.setIsLoading(false);
      if (json.ok) {
        this.onClearField();
        alert(
          'Спасибо! Твоя заявка отправлена деду морозу. Если ты не говно человек - то с тобой свяжутся',
        );
      } else alert('Ну и что ты уже сломал? Что-то пошло не так, попробуй позже!');
    }
  };
}

export default new Form();
