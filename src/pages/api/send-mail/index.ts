import { NextApiRequest, NextApiResponse  } from 'next';
import { sendEmail } from '@/utils/send-email';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {
    const { firstName, lastName } = req.body;
    const result = await sendEmail({ firstName, lastName });
    return res.status(200).json({ok: true, result});
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      ok: false,
      message: "The requested endpoint was not found or doesn't support this method."
    }
  });
}