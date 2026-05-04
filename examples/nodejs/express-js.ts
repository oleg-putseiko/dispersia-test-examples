import { Dispersia } from 'dispersia';
import express, { type Request, type Response } from 'express';

const app = express();

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

app.use(express.json());
app.post('/send', async (req: Request, res: Response) => {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return res.status(error.status).json(error);

  return res.status(200).json(data);
});
