import { Dispersia } from 'npm:dispersia';

const dispersia = new Dispersia(Deno.env.get('DISPERSIA_API_KEY'));

Deno.serve(async () => {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return Response.json(data ?? error);
});
