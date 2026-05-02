import { DispersiaClient } from 'dispersia';
import { Hono } from 'hono';

const app = new Hono();

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

app.post('/', async (c) => {
  const { data, error } = await client.messages.send({
    key: 'tg_XXXXXXXXX',
    data: {
      product: 'T-Shirt',
      variant: 'Size XL',
      user: {
        name: 'Jane Doe',
      },
    },
    labels: ['commerce', 'cloth', 'purchase'],
  });

  if (error) return c.json(error, error.status);

  return c.json(data);
});

export default app;
