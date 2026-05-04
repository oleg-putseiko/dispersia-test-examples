import { DispersiaClient } from 'npm:dispersia';

const client = new DispersiaClient(Deno.env.get('DISPERSIA_API_KEY'));

Deno.serve(async () => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return Response.json(data ?? error);
});
