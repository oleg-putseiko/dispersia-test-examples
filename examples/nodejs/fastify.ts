import Fastify from 'fastify';
import { DispersiaClient } from 'dispersia';

const app = Fastify({ logger: true });

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

app.post('/notify', async (request, reply) => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return reply.status(error.status).send(error);

  return reply.send(data);
});
