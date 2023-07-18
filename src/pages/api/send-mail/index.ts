import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.beget.com',
    port: 25,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  try {
    switch (req.method) {
      case 'GET':
        res.status(200).json({ok: false, message: 'To send a message, you need to use a POST request'})
        break
      case 'POST':
        const body = JSON.parse(req.body)
        transporter
          .sendMail({
            from: '"Sani Letom 👻" <info@saniletom.ru>',
            to: ['mukshin.an@gmail.com'],
            subject: 'Заявка деду морозу ✔',
            text: `Я, ${body.lastName} ${
              body.firstName
            }, официально подтверждаю, что я не говно человек!`,
            html: `Я, <strong><i>${body.lastName} ${
              body.firstName
            }</i></strong>, официально подтверждаю, что я не говно человек!<br><b><i>С Увлажнением!</i></b>`,
          })
          .then((result) => {
            res.statusCode = parseInt(result.response.substring(0, 3));
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            res.status(200).json({
              envelope: result.envelope,
              messageId: result.messageId,
              rejected: result.rejected,
              ok: true,
            });
          })
          .catch((reason) => {
            console.error(reason);
            res.status(500).json({ reason, ok: false });
            res.send('Internal Server Error');
          });
        break
      default:
        res.status(200).send('To send a message, you need to use a POST request')
    }
  } catch (error) {
    console.error(error)
    res.json({ok: false, message: 'Something went wrong'})
  }
}
