import Fastify from 'fastify';
import { Dispersia } from 'dispersia';

const app = Fastify({ logger: true });

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

app.post('/send', async (request, reply) => {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return reply.status(error.status).send(error);

  return reply.send(data);
});
