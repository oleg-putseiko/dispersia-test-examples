import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export default async function send() {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return Response.json(data ?? error, {
    headers: { 'Content-Type': 'application/json' },
  });
}
