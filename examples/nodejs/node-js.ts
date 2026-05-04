import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

const { data, error } = await client.messages.send({
  templateId: 'tg_XXXXXXXXX',
  data: {
    name: 'Jane Doe',
  },
});

if (error) {
  console.error(error);
  process.exit(1);
}

console.log(data);
