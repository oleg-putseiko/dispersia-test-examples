import { DispersiaClient } from 'dispersia';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const client = new DispersiaClient(env.DISPERSIA_API_KEY);

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
  },
};
