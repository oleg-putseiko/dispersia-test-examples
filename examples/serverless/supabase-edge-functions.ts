Deno.serve(async () => {
  const apiKey = Deno.env.get('DISPERSIA_API_KEY');

  try {
    const res = await fetch('https://api.dispersia.io/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
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

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
