import { DispersiaClient } from 'dispersia';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const client = new DispersiaClient(env.DISPERSIA_API_KEY);

    const { data, error } = await client.messages.send({
      templateId: 'tg_XXXXXXXXX',
      data: {
        name: 'Jane Doe',
      },
    });

    return Response.json(data ?? error);
  },
};
