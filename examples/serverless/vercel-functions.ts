export async function POST() {
  const res = await fetch('https://api.dispersia.io/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DISPERSIA_API_KEY}`,
    },
    body: JSON.stringify({
      key: 'tg_XXXXXXXXX',
      data: {
        product: 'T-Shirt',
        variant: 'Size XL',
        user: {
          name: 'Jane Doe',
        },
      },
      labels: ['commerce', 'cloth', 'purchase'],
    }),
  });

  const data = await res.json();

  return Response.json(data, { status: res.status });
}
