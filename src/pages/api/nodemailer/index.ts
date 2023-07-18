import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import * as process from 'process';

type bodyType = {
  firstName: string;
  lastName: string;
  to: string | string[];
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const body: bodyType = req.body

  try {
    console.log('строка 15')
    if (req.method === 'POST') {
      console.log('строка 17')
      const transporter = nodemailer.createTransport({
        host: 'smtp.beget.com',
        port: 25,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      });
      console.log('строка 18')

      const result = await transporter.sendMail({
        from: '"Sani Letom 👻" <info@saniletom.ru>',
        to: body.to,
        subject: 'Заявка деду морозу ✔',
        text: `Я, ${body.lastName} ${body.firstName}, официально подтверждаю, что я не говно человек!`,
        html: `Я, <strong><i>${body.lastName} ${body.firstName}</i></strong>, официально подтверждаю, что я не говно человек!<br><b><i>С Увлажнением!</i></b>`,
      });
      console.log('строка 37')
      res.statusCode = parseInt(result.response.substring(0, 3));
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(
        JSON.stringify({
          accepted: result.accepted,
          textStatus: result.response.includes('OK') ? 'ok' : 'error',
          envelope: result.envelope,
          messageId: result.messageId,
          rejected: result.rejected,
          ok: true,
        }),
      );
      console.log('строка 51')
    } else {
      res.status(405).send("");
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(
        JSON.stringify({
          ok: false,
          textStatus: 'error',
          rejected: ['Bad Request'],
          headers: { 'content-type': 'application/json' },
        }),
      );
    }
    console.log('строка 65')
  } catch (error) {
    console.error(error);
    res.json({ ...(error as object), ok: false });
    res.status(405).end();
  }
  console.log('строка 71')
}
