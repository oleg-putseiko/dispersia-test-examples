import { Dispersia } from 'dispersia';

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

export const handler = async (event: any) => {
  const { data, error } = await dispersia.messages.send({
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
