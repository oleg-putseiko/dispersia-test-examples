import { DispersiaClient } from 'dispersia';
import { Hono } from 'hono';

const app = new Hono();

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

app.post('/', async (c) => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return c.json(error, error.status);

  return c.json(data);
});

export default app;
