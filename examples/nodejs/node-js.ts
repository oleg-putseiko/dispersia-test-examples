import { Dispersia } from 'dispersia';

const dispersia = new Dispersia(process.env.DISPERSIA_API_KEY);

const { data, error } = await dispersia.messages.send({
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
