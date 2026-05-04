import { Dispersia } from 'dispersia';

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

export default async function send() {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return Response.json(data ?? error, {
    headers: { 'Content-Type': 'application/json' },
  });
}
