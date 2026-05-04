export async function POST() {
  const res = await fetch('https://api.dispersia.io/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DISPERSIA_API_KEY}`,
    },
    body: JSON.stringify({
      templateId: 'tg_XXXXXXXXX',
      data: {
        name: 'Jane Doe',
      },
    }),
  });

  const data = await res.json();

  return Response.json(data, { status: res.status });
}
