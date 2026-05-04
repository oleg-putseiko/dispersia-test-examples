import { Dispersia } from 'dispersia';

const config = useRuntimeConfig();
const dispersia = new Dispersia(config.dispersiaApiKey);

export default defineEventHandler(async () => {
  const { data, error } = await dispersia.messages.send({
    templateId: 'tg_XXXXXXXXX',
    data: {
      name: 'Jane Doe',
    },
  });

  if (error) throw createError(error);

  return data;
});
