import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

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

if (error) {
  console.error(error);
  process.exit(1);
}

console.log(data);
