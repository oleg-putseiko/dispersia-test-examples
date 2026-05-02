import { json } from '@remix-run/node';
import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export async function action() {
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

  if (error) return json({ error }, { status: error.status });

  return json({ data }, { status: 200 });
}
