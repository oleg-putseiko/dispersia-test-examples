import { DispersiaClient } from 'dispersia';
import { NextResponse } from 'next/server';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

export async function POST() {
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

  if (error) return NextResponse.json(error, { status: error.status });

  return NextResponse.json(data, { status: 200 });
}
