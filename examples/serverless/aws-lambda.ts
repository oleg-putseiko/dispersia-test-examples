import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export const handler = async (event: any) => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) {
    return { body: JSON.stringify(error), statusCode: error.status };
  }

  return { body: JSON.stringify(data), statusCode: 200 };
};
