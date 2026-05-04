import { DispersiaClient } from 'dispersia';

const config = useRuntimeConfig();
const client = new DispersiaClient(config.dispersiaApiKey);

export default defineEventHandler(async () => {
  const { data, error } = await client.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) throw createError(error);

  return data;
});
