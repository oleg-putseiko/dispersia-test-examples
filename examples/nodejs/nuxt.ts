import { DispersiaClient } from 'dispersia';

const config = useRuntimeConfig();
const client = new DispersiaClient(config.dispersiaApiKey);

export default defineEventHandler(async () => {
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

  if (error) {
    throw createError({
      statusCode: error.status,
      statusMessage: error.message,
      data: error,
    });
  }

  return data;
});
