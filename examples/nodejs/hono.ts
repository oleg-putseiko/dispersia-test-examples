import { Dispersia } from 'dispersia';
import { Hono } from 'hono';

const app = new Hono();

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

app.post('/send', async (c) => {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return c.json(error, error.status);

  return c.json(data);
});

export default app;
