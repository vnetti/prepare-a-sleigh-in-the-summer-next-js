import * as process from 'process';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export const sendEmail = async ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  console.log(SENDGRID_API_KEY)
  sgMail.setApiKey(SENDGRID_API_KEY as string);
  try {

    const message = {
      to: ['mukshin.an@gmail.com'],
      from: {
        email: '<info@saniletom.ru>',
        name: 'Sani Letom 👻',
      },
      subject: 'Заявка деду морозу ✔',
      text: `Я, ${lastName} ${firstName}, официально подтверждаю, что я не говно человек!`,
      html: `Я, <strong><i>${lastName} ${firstName}</i></strong>, официально подтверждаю, что я не говно человек!<br><b><i>С Увлажнением!</i></b>`,
    };

    return await sgMail.send(message);
  } catch (e) {
    console.error(e);
    return e;
  }
};
