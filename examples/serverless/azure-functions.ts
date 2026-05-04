import { app, type HttpResponseInit } from '@azure/functions';
import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export async function send(): Promise<HttpResponseInit> {
  const { data, error } = await client.messages.send({
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
