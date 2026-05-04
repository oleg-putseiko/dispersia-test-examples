import { DispersiaClient } from 'dispersia';
import { NextResponse } from 'next/server';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export async function POST() {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return NextResponse.json(data ?? error);
}
