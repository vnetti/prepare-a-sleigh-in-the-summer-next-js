import { makeAutoObservable } from 'mobx';
import formData from "form-data";
import Mailgun from "mailgun.js";

class Form {
  firstName: string;
  lastName: string;
  isLoading: boolean


  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.isLoading = false

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

  onSubmit = () => {

    if (!this.spaceChecking(this.firstName) || ! this.spaceChecking(this.lastName)) {
      alert('В полях Имя и Фамилия должны быть данные !')
    } else {
      this.isLoading = true
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'c5d2e63c3f27a534a3ebe6de4dff4cc7-c30053db-b4b8c3b5'});
      mg.messages.create('sandbox31d7434ac5c249a386f29c7e5f9e525f.mailgun.org', {
        from: "Excited User <mukshin.an@gmail.com>",
        to: ["mukshin.an@gmail.com", "spbkvv@bk.ru"],
        subject: "Заявка деду морозу ${this.lastName} ${this.firstName}",
        text: `Я, ${this.lastName} ${this.firstName}, официально подтверждаю, что я не говно человек!`,
      })
        .then(msg => {
          this.onClearField()
          alert('Спасибо! Твоя заявка отправлена деду морозу. Если ты не говно человек - то с тобой свяжутся')
          console.log(msg)
        })
        .catch(err => {
          alert('Спасибо! Твоя заявка отправлена деду морозу. Если ты не говно человек - то с тобой свяжутся')
          // alert('Что-то пошло не так, попробуй еще разок')
          console.log(err)
        });
      this.isLoading = false
    }
  };
}

export default new Form();
