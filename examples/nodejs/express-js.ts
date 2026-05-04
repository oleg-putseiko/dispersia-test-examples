import { DispersiaClient } from 'dispersia';
import express, { type Request, type Response } from 'express';

const app = express();

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

app.use(express.json());
app.post('/', async (req: Request, res: Response) => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return res.status(error.status).json(error);

  return res.status(200).json(data);
});
