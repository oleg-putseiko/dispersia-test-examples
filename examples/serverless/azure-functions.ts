import { app, type HttpResponseInit } from '@azure/functions';
import { Dispersia } from 'dispersia';

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

export async function send(): Promise<HttpResponseInit> {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return { status: error.status, jsonBody: error };

  return { status: 200, jsonBody: data };
}

app.http('send', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: send,
});
