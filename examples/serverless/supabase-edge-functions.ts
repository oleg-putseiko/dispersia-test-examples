Deno.serve(async () => {
  const apiKey = Deno.env.get('DISPERSIA_API_KEY');

  const res = await fetch('https://api.dispersia.io/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      templateId: 'tg_XXXXXXXXX',
      data: {
        name: 'Jane Doe',
      },
    }),
  });

  const data = await res.json();

  return Response.json(data, {
    headers: { 'Content-Type': 'application/json' },
  });
});
