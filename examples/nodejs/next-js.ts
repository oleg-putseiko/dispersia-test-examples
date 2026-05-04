import { Dispersia } from 'dispersia';
import { NextResponse } from 'next/server';

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

export async function POST() {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  return NextResponse.json(data ?? error);
}
