import { json } from '@remix-run/node';
import { Dispersia } from 'dispersia';

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

export async function action() {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return json({ data, error });
}
