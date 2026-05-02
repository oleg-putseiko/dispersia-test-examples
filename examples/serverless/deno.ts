import { DispersiaClient } from 'npm:dispersia';

const client = new DispersiaClient(Deno.env.get('DISPERSIA_API_KEY'));

Deno.serve(async () => {
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

  if (error) return Response.json(error, { status: error.status });

  return Response.json(data);
});
