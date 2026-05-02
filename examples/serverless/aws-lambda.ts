import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export const handler = async (event: any) => {
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
    return {
      body: JSON.stringify(error),
      statusCode: error.status,
      headers: { 'Content-Type': 'application/json' },
    };
  }

  return {
    body: JSON.stringify(data),
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
  };
};
