import { Dispersia } from 'dispersia';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const dispersia = new Dispersia(env.DISPERSIA_API_KEY);

    const { data, error } = await dispersia.messages.send({
      templateId: 'tg_XXXXXXXXX',
      data: {
        name: 'Jane Doe',
      },
    });

    return Response.json(data ?? error);
  },
};
