const { DispersiaClient } = require('dispersia');

const client = new DispersiaClient(process.env.DISPERSIA_API_KEY);

exports.send = async (req, res) => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) return res.status(error.status).send(error);

  return res.status(200).send(data);
};
